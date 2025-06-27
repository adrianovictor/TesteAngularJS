(function (){
    'use strict';

    angular
        .module('a2s.home', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        "": {
                            templateUrl: 'src/app/home/home.tpl.html',
                            controller: 'homeCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });            
        })
        .controller('homeCtrl', HomeCtrl);


    HomeCtrl.$inject = ['moment', '_']
    function HomeCtrl() {
        /* jshint validthis: true */
        var vm = this;

        // --- Teste com Moment.js ---
        // Obter a data e hora atual
        var now = moment();
        // Formatar a data para exibição
        vm.formattedDate = now.format('DD/MM/YYYY HH:mm:ss');
        //console.log('Moment.js no homeCtrl - Data formatada:', vm.formattedDate);

        // Exemplo de manipulação de data: adicionar 10 dias
        var futureDate = moment().add(10, 'days');
        vm.futureDateFormatted = futureDate.format('DD-MM-YYYY');
        //console.log('Moment.js no homeCtrl - Data daqui a 10 dias:', vm.futureDateFormatted);

        // --- Teste com Lodash ---
        var numbers = [5, 2, 8, 1, 9, 3, 7];
        // Ordenar o array com Lodash
        vm.sortedArray = _.sortBy(numbers);
        //console.log('Lodash no homeCtrl - Array original:', numbers);
        //console.log('Lodash no homeCtrl - Array ordenado:', vm.sortedArray);

        var products = [
            { id: 1, name: 'Laptop', category: 'Electronics' },
            { id: 2, name: 'Mouse', category: 'Electronics' },
            { id: 3, name: 'Chair', category: 'Furniture' },
            { id: 4, name: 'Desk', category: 'Furniture' }
        ];

        // Agrupar produtos por categoria
        vm.groupedProducts = _.groupBy(products, 'category');
        //console.log('Lodash no homeCtrl - Produtos agrupados:', vm.groupedProducts);

        // Outros exemplos de Lodash:
        // Encontrar um elemento
        var laptop = _.find(products, { name: 'Laptop' });
        //console.log('Lodash no homeCtrl - Encontrado Laptop:', laptop);

        // Mapear (transformar) um array
        var productNames = _.map(products, 'name');
        //console.log('Lodash no homeCtrl - Nomes dos produtos:', productNames);

        // Você pode adicionar mais lógica do seu controller aqui
        vm.welcomeMessage = 'Bem-vindo à A2S Soluções Digitais!';        
    }
})();