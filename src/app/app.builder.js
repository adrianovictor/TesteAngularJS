(function (){
    'use strict';

    angular
        .module('a2s.providers',[])
        .provider('appBuilder', appBuilderProvider);

    function appBuilderProvider(localStorageServiceProvider, $translateProvider, $locationProvider) {
        var service = {
            build: build,
            $get: $get
        };

        return service;

        /**
         * Calls all configuration methods
         */
        function build() {
            [configureStorage, configureRoute]
                .forEach(function (action){
                    return action;
                });
                //.forEach(action => action());
        }

        /**
         * Configure storage
         */
        function configureStorage() {
            localStorageServiceProvider.setStorageCookie(365, '/');
            localStorageServiceProvider.setStorageCookieDomain('http://localhost:8080');
        }

        /**
         * Configure Router
         */
        function configureRoute() {
            $locationProvider.html5Mode(false);
        }

        /**
         * Configure translator
         */
        function configureTranslate() {
            $translateProvider
                .useStaticFilesLoader({
                    prefix: 'src/app/translations/',
                    suffix: '.json', 
                })
                .preferredLanguage('pt-br')
                .useSanitizeValueStrategy('escaped');
        }

        function $get() {
            return undefined;
        }
    }
})();
