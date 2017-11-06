angular.module('MainCtrl', ['AuthenticationService']).controller('MainController', function ($rootScope, $scope, Authentication, $location) {
    $rootScope.flashMsg = {};
    
    $scope.logout = function () {
        Authentication.clearCredentials();
        $location.path('/');
    }

    $scope.login = function () {
        $location.path('/login');
    }
});