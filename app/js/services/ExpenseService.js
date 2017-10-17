angular.module('ExpenseService', []).service('Expense', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('http://localhost:9000/api/v1/expenses');
        },
        create: function (expense) {
            return $http.post('http://localhost:9000/api/v1/expenses', expense);
        },
        delete: function (id) {
            return $http.delete('http://localhost:9000/api/v1/expenses/' + id);
        },
        getOne: function (id) {
            return $http.get('http://localhost:9000/api/v1/expenses/' + id);
        }
    }
}]);