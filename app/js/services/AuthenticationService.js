angular.module('AuthenticationService', []).service('Authentication', ['$http', '$cookies', '$rootScope', function ($http, $cookies, $rootScope) {
    // TODO: Add config file for base urls
    return {
        all: function () {
            return $http.get('http://localhost:9000/api/v1/users');
        },
        login: function (email) {
            return $http.get('http://localhost:9000/api/v1/login' + '?email=' + email);
        },
        setCredentials: function (email) {
            $rootScope.globals = {
                currentUser: {
                    email: email
                }
            };

            var cookieExp = new Date();
            cookieExp.setDate(cookieExp.getDate() + 7);
            $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
        },
        clearCredentials: function () {
            $rootScope.globals = {};
            $cookies.remove('globals');
        }
    }
}]);