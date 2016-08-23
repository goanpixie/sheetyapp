var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
$routeProvider

	.when( {
		templateUrl: 'partials/dashboard.html',
		controller: 'batchController'
	})
	.when( {
		templateUrl: 'partials/stations.html',
		controller: 'batchController'
	})
	.when( {
		templateUrl: 'partials/wash_station.html',
		controller: 'batchController'
	})
	.when( {
		templateUrl: 'partials/dry_station.html',
		controller: 'batchController'
	})
	.when( {
		templateUrl: 'partials/folder_station.html',
		controller: 'batchController'
	})
	.when( {
		templateUrl: 'partials/finish_station.html',
		controller: 'batchController'
	})
	.when( {
		templateUrl: 'partials/batch.html',
		controller: 'batchController'
	})
	.when( {
		templateUrl: 'partials/edit_customer.html',
		controller: 'customerController'
	})						
	.when( {
		templateUrl: 'partials/newcustomer.html',
		controller: 'customerController'
	})
	.when( {
		templateUrl: 'partials/manage_customer.html',
		controller: 'customerController'
	})
	.when( {
		templateUrl: 'partials/manage_items.html',
		controller: 'itemController'
	})

	.when( {
		templateUrl: 'partials/edit_items.html',
		controller: 'itemController'
	})
	.when( {
		templateUrl: 'partials/login.html',
		controller: 'credentialController'
	})
		.otherwise({
			redirectTo: '/'
		})
	});