angular.module('AddCtrl', ['ExpenseService', 'AuthenticationService', 'FlashService']).controller('AddController', function ($scope, Expense, Authentication, Flash, $rootScope, $route, $window) {

    $scope.expense = {
        user: Authentication.getCurrentUser()._id
    };
    $scope.isEdit = false;

    if ($route.current.pathParams.id) {
        $rootScope.loading = true;
        $scope.isEdit = true;
        var id = $route.current.pathParams.id;
        Expense.getOne(id).then(function (res) {
            $scope.expense = res.data;
            $scope.expense.date = new Date(res.data.date);
            delete $scope.expense._id;
            delete $scope.expense.__v;
            $rootScope.loading = false;
        });
    }

    $scope.addExpense = function () {
        $rootScope.loading = true;
        Expense.create($scope.expense).then(function (res) {
            $rootScope.loading = false;
            Flash.success('Expense added successfully!');
            $window.location.href = '/list';
        }, function (err) {
            Flash.error(err);
        });
    }

    $scope.cancel = function () {
        $window.location.href = '/list';
    }

    $scope.saveExpense = function () {
        $rootScope.loading = true;
        Expense.save($scope.expense, $route.current.pathParams.id).then(function (res) {
            $rootScope.loading = false;
            Flash.success('Expense updated successfully!');
            $window.location.href = '/list';
        }, function (err) {
            Flash.error(err);
        });
    }
});