angular.module('AddCtrl', ['ExpenseService']).controller('AddController', function ($scope, Expense, $rootScope, $route, $window) {

    $scope.expense = {};
    $scope.isEdit = false;

    if ($route.current.pathParams.id) {
        $rootScope.loading = true;
        $scope.isEdit = true;
        var id = $route.current.pathParams.id;
        Expense.getOne(id).then(function (res) {
            $scope.expense = res.data;
            $scope.expense.date = new Date(res.data.date);
            $rootScope.loading = false;
        });
    }

    $scope.addExpense = function () {
        $rootScope.loading = true;
        Expense.create($scope.expense).then(function (res) {
            $rootScope.loading = false;

        });
        $window.location.href = '/list';
    }

    $scope.cancel = function () {
        $window.location.href = '/list';
    }

});