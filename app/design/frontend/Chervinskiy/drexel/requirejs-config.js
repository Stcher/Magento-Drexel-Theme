var config = {

    deps: [
        "js/example",
    ],

    map: {
        '*': {
            'owlcarousel': 'js/owl.carousel.min',
            'sticky' : 'js/jquery.sticky',
            'tether' : 'js/tether.min',
            'bootstrap': 'js/bootstrap.min',
            'select' : 'js/jquery.nice-select',
        }
    },
    "shim": {
        "owlcarousel": ["jquery"],
        "tether": ["jquery"],
        "bootstrap": ["jquery"],
        "select" : ["jquery"],
    }

};
