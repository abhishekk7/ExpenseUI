angular.module('AuthenticationService', []).service('Authentication', ['$http', '$cookies', '$rootScope', 'Constants', function ($http, $cookies, $rootScope, Constants) {
    // TODO: Add config file for base urls
    return {
        login: function (email) {
            return $http.get(Constants.apiBaseUrl + '/login' + '?email=' + email);
        },
        setCredentials: function (user) {
            $rootScope.globals = {
                currentUser: user
            };

            var cookieExp = new Date();
            cookieExp.setDate(cookieExp.getDate() + 7);
            $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
        },
        clearCredentials: function () {
            $rootScope.globals = {};
            $cookies.remove('globals');
        },
        getCurrentUser: function () {
            return $rootScope.globals.currentUser;
        }
    }
}]);