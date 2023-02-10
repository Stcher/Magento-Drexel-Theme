define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    var qtyDown = $(".qty-down");
    var qtyUp = $(".qty-up");
    var qty = $("#qty");

    $.widget('drexel.quantityCounter', {

        _create: function(qtyCheck) {

            $(".qty-up").click(function() {
                qty.val(parseInt(qty.val()) + 1);
            });

            $(".qty-down").click(function() {
                if (qty.val() <= 1) {
                    qty.val(1);
                } else {
                    qty.val(parseInt(qty.val()) - 1);
                }
            });
            return qtyCheck;
        }
    });
    return $.drexel.quantityCounter;
})

