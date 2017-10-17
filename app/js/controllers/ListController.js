angular.module('ListCtrl', ['ExpenseService']).controller('ListController', function ($scope, Expense, $rootScope, $location) {
    $rootScope.loading = true;

    $scope.expenseList = [];
    Expense.get().then(function (response) {
        console.log(response.data);
        $scope.expenseList = response.data;
    }).finally(function () {
        $rootScope.loading = false;
    });

    $scope.delete = function (expense) {
        if (confirm("Are you sure you want to delete?") == true) {
            $rootScope.loading = true;
            Expense.delete(expense._id).then(function () {
                var index = $scope.expenseList.indexOf(expense);
                $scope.expenseList.splice(index, 1);
                $rootScope.loading = false;
            });
        }
    };

    $scope.edit = function (id) {
        $location.url('/editExpense/' + id);
    };
});