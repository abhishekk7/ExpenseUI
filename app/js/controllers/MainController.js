angular.module('MainCtrl', ['AuthenticationService', 'ExpenseService']).controller('MainController', function ($rootScope, $scope, Authentication, Expense, $location) {
    $rootScope.flashMsg = {};

    $scope.logout = function () {
        Authentication.clearCredentials();
        $location.path('/');
    }

    $scope.login = function () {
        $location.path('/login');
    }

    $rootScope.loading = true;
    Expense.getByCategory().then(function (response) {
        console.log(response.data);
        var mySeries = [];

        response.data.forEach(function (entry) {
            mySeries.push({
                values: [entry.total],
                text: entry._id
            });
        });

        $scope.myJson = {
            type: "pie3d",
            backgroundColor: "#2B313B",
            plot: {
                borderColor: "#2B313B",
                borderWidth: 5,
                valueBox: {
                    placement: 'out',
                    text: '%t\n%pv'
                },
                tooltip: {
                    fontSize: '18',
                    fontFamily: "Open Sans",
                    padding: "5 10",
                    text: "%pv"
                },
                animation: {
                    effect: 2,
                    method: 5,
                    speed: 500,
                    sequence: 1
                }
            },
            title: {
                fontColor: "#fff",
                text: 'Expenses by Category',
                offsetX: 10,
                fontSize: 25
            },
            plotarea: {
                margin: "20"
            },
            series: mySeries
        };

        $rootScope.loading = false;
    });
});