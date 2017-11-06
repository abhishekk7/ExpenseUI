angular.module('ListCtrl', ['ExpenseService', 'AuthenticationService', 'FlashService']).controller('ListController', function ($scope, Expense, Authentication, Flash, $rootScope, $location) {
    $rootScope.loading = true;

    $scope.expenseList = [];
    $scope.total = 0;

    Expense.getByUser(Authentication.getCurrentUser()._id).then(function (response) {
        $scope.expenseList = response.data;
        _calculateTotal();
    }).finally(function () {
        $rootScope.loading = false;
    });

    $scope.delete = function (expense) {
        if (confirm("Are you sure you want to delete?") == true) {
            $rootScope.loading = true;
            $scope.total -= expense.amount;
            Expense.delete(expense._id).then(function () {
                var index = $scope.expenseList.indexOf(expense);
                $scope.expenseList.splice(index, 1);
                $rootScope.loading = false;
                Flash.info(expense.category + '-' + expense.description + ' deleted successfully!');
            });
        }
    };

    $scope.edit = function (id) {
        $location.url('/editExpense/' + id);
    };

    function _calculateTotal() {
        $scope.expenseList.forEach(function (element) {
            $scope.total += element.amount;
        }, this);
    }
});