angular.module('MainApp')
.controller('showExpenseCtrl',
  ['$scope', '$rootScope', '$state', 'AddExpenseService', '$timeout',
	function ($scope, $rootScope, $state, AddExpenseService, $timeout) {

    AddExpenseService.search(function (result) {
      $timeout(function () {
        console.log("reloading !!!!!!!!");
        $state.reload();
      }, 10000);
      $scope.expenses = result;
    })
}]);
