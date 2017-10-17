angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider

        // home page
        .when('/home', {
            templateUrl: 'views/home.html'
        })

        // listing 
        .when('/list', {
            templateUrl: 'views/list.html',
            controller: 'ListController'
        })

        // add new expense 
        .when('/addExpense', {
            templateUrl: 'views/addExpense.html',
            controller: 'AddController'
        })

        //otherwise
        .otherwise({
            redirectTo: '/home'
        });

    $locationProvider.html5Mode(true);

}]);