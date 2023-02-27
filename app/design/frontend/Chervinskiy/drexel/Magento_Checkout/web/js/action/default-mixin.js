define([
    'jquery',
    'Magento_Checkout/js/model/payment/additional-validators',
    'Magento_Checkout/js/action/redirect-on-success'
    ],
    function (
        $,
        additionalValidators,
        redirectOnSuccessAction
    ) {
    'use strict';

    var mixin = {
        redirectAfterPlaceOrder: true,

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

