angular.module('LoginCtrl', ['AuthenticationService','FlashService']).controller('LoginController', function ($scope, $rootScope, Authentication, Flash, $location) {

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
                    Flash.error('Invalid Username/Password')
                }
            } else {
                Flash.error('Invalid Username/Password')
            }
            $rootScope.loading = false;
        });
    };
});