angular.module('MainCtrl', ['AuthenticationService']).controller('MainController', function ($scope, Authentication, $location) {
    $scope.logout = function () {
        Authentication.clearCredentials();
        $location.path('/');
    }

    $scope.login = function () {
        $location.path('/login');
    }
});