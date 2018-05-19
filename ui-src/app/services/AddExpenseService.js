angular.module('MainApp')
	.factory('AddExpenseService', ['$http', '$rootScope',
			function AddExpenseService($http, $rootScope){
					var service = {};

					service.search = search;
					service.add = add;
					return service;

					function search(callback){
						var url = "/api/expense/getExpense";
						$http.get(url)
							.then(function(response){
								callback(response.data);
							}, function(response){
								callback(false);
							});
					};

					function add(form, callback){
						var url = "";
						var config = {
							date: form.date2,
							amount: form.amount,
							category: form.category,
							type: form.type
						}
						if(form)
							url = '/api/expense/add';
						else
							url = '/api/expense/add';
						$http.post(url, config)
							.then(function(response){
								callback(response.data);
							}, function(response){
								callback(false);
							});
					};

		}
]);
