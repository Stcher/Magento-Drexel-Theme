var config = {

    deps: [
        "js/example"
    ],

    map: {
        '*': {
            // Nice-Select library for drop-down menu
            'select' : 'js/jquery.nice-select',
            // Accordion configuration for Accordion widget
            "accordionInit" : 'js/accordion-init'
        }
    },
    "shim": {
        "select" : ["jquery"],
    }

};
