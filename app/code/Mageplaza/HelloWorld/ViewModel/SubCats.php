<?php
declare(strict_types=1);

namespace Mageplaza\HelloWorld\ViewModel;

use \Magento\Catalog\Model\CategoryRepository;

class SubCats extends \Magento\Framework\View\Element\Template implements \Magento\Framework\View\Element\Block\ArgumentInterface
{
    public $storeManager;

    public $viewAssetRepo;

    public  $coreRegistry;

    public $categoryFactory;

    public $catalogHelperOutput;

    public function __construct(
        \Magento\Store\Model\StoreManagerInterface $storeManager,
        \Magento\Framework\View\Asset\Repository $viewAssetRepo,
        \Magento\Framework\Registry $coreRegistry,
        \Magento\Catalog\Model\CategoryFactory $categoryFactory,
        \Magento\Catalog\Helper\Output $catalogHelperOutput,
        \Magento\Framework\View\Element\Template\Context $context,
        array $data = []
    ) {
        $this->storeManager        = $storeManager;
        $this->viewAssetRepo       = $viewAssetRepo;
        $this->coreRegistry        = $coreRegistry;
        $this->categoryFactory     = $categoryFactory;
        $this->catalogHelperOutput = $catalogHelperOutput;
        parent::__construct($context, $data);
    }

    public function getCategories()
    {

        $category = $this->getCurrentCategory();
        if(!$category) return;

        $categoryId = $category->getId();

        $sortAttribute = $this->getSortAttribute();
        $model = $this->categoryFactory->create();
        $categories = $model->getCollection()
            ->addAttributeToSelect(['name', 'url_key', 'url_path', 'image','description'])
            // ->addAttributeToFilter('include_in_menu', 1)
            ->addAttributeToFilter('parent_id', $categoryId)
            ->addAttributeToSort($sortAttribute)
            ->addIsActiveFilter();

        return $categories;
    }

    public function getDescription($category)
    {
        $description = $category->getDescription();
        if ($description) {
            $categoryDescription = $this->catalogHelperOutput
                ->categoryAttribute($category, $description, 'description');
        } else {
            $categoryDescription = '';
        }
        return trim($categoryDescription);
    }

    public function getImage($category)
    {
        $placeholderImageUrl = $this->viewAssetRepo->getUrl(
            'Magento_Catalog::images/product/placeholder/small_image.jpg'
        );
        $image = $category->getImage();
        if ($image != null) {
            $url = $this->getImageUrl($image);
        } else {
            $url = $placeholderImageUrl;
        }
        return $url;
    }

    public function getImageUrl($image)
    {
        $url = false;
        if ($image) {
            if (substr($image, 0, 1) === '/') {
                $url = $this->storeManager->getStore()->getBaseUrl(
                        \Magento\Framework\UrlInterface::URL_TYPE_WEB
                    ) . ltrim($image, '/');
            } else {
                $url = $this->storeManager->getStore()->getBaseUrl(
                        \Magento\Framework\UrlInterface::URL_TYPE_MEDIA
                    ) . 'catalog/category/' . $image;
            }
        }
        return $url;
    }

    public function getCurrentCategory()
    {
        return $this->coreRegistry->registry('current_category');
    }
}
