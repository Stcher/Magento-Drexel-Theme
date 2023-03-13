var config = {
    map: {
        '*': {
            // "+" and "-" quantity buttons
            'CustomWidget': 'Magento_Catalog/js/quantityWidget',
        }
    },
    "shim": {
        'CustomWidget': ['jquery', 'jquery/ui']
    },
    config: {
        mixins: {
            // Open mini-cart while adding product
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Magento_Catalog/js/catalog-add-to-cart-mixin': true
            }
        }
    }
};
