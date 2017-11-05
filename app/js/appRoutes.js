angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
    '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
        console.log('routes');
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
                templateUrl: 'views/addEditExpense.html',
                controller: 'AddController'
            })

            //edit expense
            .when('/editExpense/:id', {
                templateUrl: 'views/addEditExpense.html',
                controller: 'AddController'
            })

            //login
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })

            //register new user
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterController'
            })

            //register new user
            .when('/about', {
                templateUrl: 'views/about.html'
            })

            //otherwise
            .otherwise({
                redirectTo: '/home'
            });

        $locationProvider.html5Mode(true);

    }]);