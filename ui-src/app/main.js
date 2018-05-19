angular.module('MainApp', ['ui.router']).config(config).run(run);

function config($stateProvider, $urlRouterProvider){
	console.log("i get here in states!!!");

	$stateProvider
	.state('index', {
		url: '/',
		views: {
			'': {
					templateUrl: 'app.html',
				},
				'top@index': {
					templateUrl: 'topbar.html',
				},
				'side@index': {
					templateUrl: 'sidebar.html'
				},
				'content@index': {
					templateUrl: 'content.html'
				}
		}
	})
		.state('index.addExpense', {
			parent:	'index',
			url: '/add',
			templateUrl : 'addExpense.html',
			controller : 'AddExpenseCtrl'
		})
		.state('index.showExpense', {
			parent:	'index',
			url: '/getExpense',
			templateUrl : 'showExpenseResult.html',
			controller : 'showExpenseCtrl'
		})
};

function run($rootScope, $state, $location){
	console.log('I get inside run run !!!');
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
		console.log('Main.run|||| toState:'+toState+'::::fromState:'+fromState);
	});
}
