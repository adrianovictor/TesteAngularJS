(function (){
    'use strict';

    angular
        .module('a2s.about', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('about', {
                    url: '/sobre-nos',
                    views: {
                        "": {
                            templateUrl: 'src/app/home/about.tpl.html',
                            controller: 'aboutCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        })
        .controller('aboutCtrl', AboutCtrl);

    function AboutCtrl() {
        /* jshint validthis: true */
        var vm = this;

    }
})();