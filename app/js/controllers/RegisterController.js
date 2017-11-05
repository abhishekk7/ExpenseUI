angular.module('RegisterCtrl', ['AuthenticationService', 'UserService']).controller('RegisterController', function ($scope, $rootScope, $location, Authentication, User) {

    $scope.user = {};

    $scope.register = function () {
        $scope.msg = "";
        if ($scope.user.password == $scope.confirm_password) {
            $rootScope.loading = true;
            Authentication.login($scope.user.email).then(function (response) {
                if (response.data) {
                    $scope.msg = "User already exists";
                } else {
                    User.create($scope.user).then(function () {
                        $location.path('/login');
                    });
                }
                $rootScope.loading = false;
            });
        } else {
            $scope.msg = "password and confirm password don't match";
        }
    }
});