(function(){
    'use strict';

    angular
        .module('a2s', [
            'ui.router',
            'LocalStorageModule',
            'a2s.providers',
            'a2s.home',
            'a2s.about',
            'a2s.services'
        ])
        .value('moment', moment)
        .value('_', _)        
        .config(function($urlRouterProvider, appBuilderProvider) {
            $urlRouterProvider.otherwise('/');

            appBuilderProvider.build();
        })
        .run(function ($rootScope) {
            $rootScope.editModeEnabled = true;            
        })
        .controller(function ($scope, $htpp){

        });
})();
