angular.module('FlashService', []).service('Flash', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
    return {
        success: function (msg) {
            $rootScope.flashMsg.success = msg;
            clear();
        },
        error: function (msg) {
            $rootScope.flashMsg.error = msg;
            clear();
        },
        info: function (msg) {
            $rootScope.flashMsg.info = msg;
            clear();
        }
    };

    function clear(seconds) {
        var sec = seconds || 4;
        $timeout(function () {
            $rootScope.flashMsg = {};
            //$scope.$apply();
        }, sec * 1000);
    }
}]);