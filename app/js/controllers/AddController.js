angular.module('AddCtrl', ['ExpenseService']).controller('AddController', function ($scope, Expense, $rootScope, $location) {

    $scope.expense = {
        amount: '12',
        category: 'test',
        amount: 0
    };

    $scope.addExpense = function () {
        $rootScope.loading = true;
        Expense.create($scope.expense).then(function (res) {
            $rootScope.loading = false;

        });
        $location.url('/list');
    }

    $scope.cancel = function () {
        $location.url('/list');
    }

});