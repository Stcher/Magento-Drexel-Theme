define([
    'jquery',
    'Magento_Checkout/js/model/payment/additional-validators'
    ],
    function (
        $,
        additionalValidators
    ) {
    'use strict';

    var mixin = {
        /**
         * Place order.
         */
        placeOrder: function (data, event) {
            var self = this;

            $(".action.primary.checkout").text("Loading");

            if (event) {
                event.preventDefault();
            }

            if (this.validate() &&
                additionalValidators.validate() &&
                this.isPlaceOrderActionAllowed() === true
            ) {
                this.isPlaceOrderActionAllowed(false);

                this.getPlaceOrderDeferredObject()
                    .done(
                        function () {
                            self.afterPlaceOrder();

                            if (self.redirectAfterPlaceOrder) {
                                redirectOnSuccessAction.execute();
                            }
                        }
                    ).always(
                    function () {
                        $(".action.primary.checkout").text("Place Order");
                        self.isPlaceOrderActionAllowed(true);
                    }
                );

                return true;
            }

            return false;
        },
    };
    return function (target) {
        return target.extend(mixin);
    };
});

