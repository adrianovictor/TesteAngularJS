(function (){
    'use strict';

    angular
        .module('a2s.services', [])
        .config(function ($stateProvider){
            $stateProvider
                .state('services', {
                    url: '/servicos',
                    views: {
                        "": {
                            templateUrl: 'src/app/home/services.tpl.html',
                            controller: 'servicesCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        })
        .controller('servicesCtrl', ServicesCtrl);

    function ServicesCtrl() {
        /* jshint validthis: true */
        var vm = this;
    }
})();