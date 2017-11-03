angular.module('ExpenseService', []).service('Expense', ['$http', 'Constants', function ($http, Constants) {
    // TODO: Add config file for base urls
    return {
        get: function () {
            return $http.get(Constants.apiBaseUrl + '/expenses');
        },
        getByUser: function (user) {
            return $http.get(Constants.apiBaseUrl + '/expenses?user=' + user);
        },
        create: function (expense) {
            return $http.post(Constants.apiBaseUrl + '/expenses', expense);
        },
        delete: function (id) {
            return $http.delete(Constants.apiBaseUrl + '/expenses/' + id);
        },
        getOne: function (id) {
            return $http.get(Constants.apiBaseUrl + '/expenses/' + id);
        },
        save: function (expense, id) {
            return $http.put(Constants.apiBaseUrl + '/expenses/' + id, expense);
        }
    }
}]);