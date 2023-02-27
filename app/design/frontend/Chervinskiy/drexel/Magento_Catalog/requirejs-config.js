var config = {
    map: {
        '*': {
            'CustomWidget': 'Magento_Catalog/js/quantityWidget',
        }
    },
    "shim": {
        'CustomWidget': ['jquery', 'jquery/ui']
    },
    config: {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Magento_Catalog/js/catalog-add-to-cart-mixin': true
            }
        }
    }
};
