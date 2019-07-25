(function(){
    'use strict';

    angular
        .module('a2s', [
            'ui.router',
            'pascalprecht.translate',
            'LocalStorageModule',
            'a2s.providers',
            'a2s.home',
            'a2s.about',
            'a2s.services'
        ])
        .config(function($urlRouterProvider, appBuilderProvider) {
            $urlRouterProvider.otherwise('/');

            appBuilderProvider.build();
        })
        .run(function ($rootScope) {
            $rootScope.editModeEnabled = true;            
        })
        .controller(function ($scope, $http){

        });
})();
