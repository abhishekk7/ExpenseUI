angular.module('ExpenseService', []).service('Expense', ['$http', function ($http) {
    // TODO: Add config file for base urls
    return {
        get: function () {
            return $http.get('http://192.168.0.23:9000/api/v1/expenses');
        },
        create: function (expense) {
            return $http.post('http://192.168.0.23:9000/api/v1/expenses', expense);
        },
        delete: function (id) {
            return $http.delete('http://192.168.0.23:9000/api/v1/expenses/' + id);
        },
        getOne: function (id) {
            return $http.get('http://192.168.0.23:9000/api/v1/expenses/' + id);
        }
    }
}]);