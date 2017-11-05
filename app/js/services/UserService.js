angular.module('UserService', []).service('User', ['$http','Constants', function ($http, Constants) {
    return {
        create: function (user) {
            return $http.post(Constants.apiBaseUrl + '/users', user);
        }
    }
}]);