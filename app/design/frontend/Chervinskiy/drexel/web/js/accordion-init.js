//
// Added accordion config so now if I didn't use options on accordion, it will applied options by default
//
define([
    "jquery",
    "domReady!",
    "accordion"
], function($){
    return function (config, element) {
        $(element).accordion({
            active: config.active || [1,2],
            collapsible: config.collapsible || true,
            openedState: config.openedState || "active",
            multipleCollapsible: config.multipleCollapsible || true,
            openOnFocus: config.openOnFocus || true,
        });
    }

});
