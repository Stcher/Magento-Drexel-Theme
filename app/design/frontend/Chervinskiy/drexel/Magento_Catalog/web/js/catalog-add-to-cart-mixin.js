define([
    'jquery'
], function($) {
    "use strict";
    return function (widget) {
        $.widget('mage.catalogAddToCart', widget, {
            /**
             * Handler for the form 'submit' event
             *
             * @param {Object} form
             */
            submitForm: function (form) {
                this.showCart();
                this.ajaxSubmit(form);
            },
            /**
             * Update mini-cart without page reload
             */
            _bindSubmit: function() {
                let self = this;
                this.element.mage('validation');
                this.element.on('submit', function(e) {
                    e.preventDefault();
                    if(self.element.valid()) {
                        self.submitForm($(this));
                    }
                });
            },
            /**
             * Open minicart when Add To Cart has been clicked
             */
            showCart: function() {
                setTimeout(function() {
                    $('.block-minicart').dropdownDialog('open');
                }, 2000);
            }
        });
        return $.mage.catalogAddToCart;
    }
});
