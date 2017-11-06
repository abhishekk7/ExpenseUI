angular.module('appSession', []).run(['$rootScope', '$location', '$cookies', '$http', function ($rootScope, $location, $cookies, $http) {
    $rootScope.globals = $cookies.getObject('globals') || {};
    
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        } else {
            var pages = {
                home: 'home',
                list: 'list',
                addExpense: 'list',
                editExpense: 'list'

            }
            var page = next.split('/');
            $rootScope.currentPage = pages[page[page.length - 1]];
        }
    });
}]);