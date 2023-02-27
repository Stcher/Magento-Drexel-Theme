var config = {

    deps: [
        "js/example"
    ],

    map: {
        '*': {
            'select' : 'js/jquery.nice-select',
            "accordionInit" : 'js/accordion-init'
        }
    },
    "shim": {
        "select" : ["jquery"],
    }

};
