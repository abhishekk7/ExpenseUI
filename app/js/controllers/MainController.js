angular.module('MainCtrl', []).controller('MainController', function ($scope, $rootScope) {

    var pages = {
        home: 'home',
        list: 'list',
        addExpense: 'list',
        editExpense: 'list'

    }

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        var page = next.$$route.originalPath.split('/');
        $rootScope.currentPage = pages[page[1]];
    });
});