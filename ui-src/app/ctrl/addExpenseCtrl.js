angular.module('MainApp')
.controller('AddExpenseCtrl',
  ['$scope', '$rootScope', '$state', 'AddExpenseService', '$stateParams', '$http', '$filter',
	function ($scope, $rootScope, $state, AddExpenseService, $stateParams, $http, $filter) {

				$scope.submit = function(){
            var date3 = $scope.addexpense.date;
            date3.setDate(date3.getDate())
            var date4 = $filter('date')(date3, "yyyy-MM-dd");
            $scope.addexpense.date2 = date4;
						AddExpenseService.add($scope.addexpense, function(result){
											alert(" Consumer Added Successfully !!!");
											$state.go('index.showExpense');
						});
				}

        $scope.types = [
            "cash",
            "card"
        ];

        $scope.update = function () {
          console.log($scope.addexpense.type);
        }

				$scope.back = function () {
                  $scope.addexpense = {};
									$state.go('index.showExpense');
				}
	}
  ]);
