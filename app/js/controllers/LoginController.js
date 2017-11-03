angular.module('LoginCtrl', ['AuthenticationService']).controller('LoginController', function ($scope, $rootScope, Authentication, $location) {

    $scope.login = function () {
        $rootScope.loading = true;
        Authentication.login($scope.email).then(function (response) {
            if (response.data) {
                var user = response.data;
                if (user.password == $scope.password) {
                    delete user.password;
                    Authentication.setCredentials(user);
                    $location.path('/home');
                } else {
                    $scope.user = "Invalid Username/Password";
                }
            } else {
                $scope.user = "Invalid Username/Password";
            }
            $rootScope.loading = false;
        });
    };
});