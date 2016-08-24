'use strict';

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: './views/main.html',
        data : {
            cssClassnames : 'landing'
        }
    })
    .state('animation', {
        url: '/animation',
        templateUrl: './views/animation.html'
    });


    /**
     * Default Route
     */
    $urlRouterProvider
        .otherwise('/');
});

