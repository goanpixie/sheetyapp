var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function($routeProvider){
$routeProvider
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'batchController'
	})
	.when('/', {
		templateUrl: 'partials/stations.html',
		controller: 'batchController'
	})
	.when('/wash', {
		templateUrl: 'partials/wash_station.html',
		controller: 'batchController'
	})
	.when('/dry', {
		templateUrl: 'partials/dry_station.html',
		controller: 'batchController'
	})
	.when('/folder', {
		templateUrl: 'partials/folder_station.html',
		controller: 'batchController'
	})
	.when('/finish', {
		templateUrl: 'partials/finish_station.html',
		controller: 'batchController'
	})
	.when('/batch', {
		templateUrl: 'partials/batch.html',
		controller: 'batchController'
	})
	.when('/edit_customer/:id', {
		templateUrl: 'partials/edit_customer.html',
		controller: 'customerController'
	})
	.when('/new_customer', {
		templateUrl: 'partials/newcustomer.html',
		controller: 'customerController'
	})
	.when('/new_item',  {
		templateUrl: 'partials/newitem.html',
		controller: 'itemController'
	})
	.when('/customer_manage', {
		templateUrl: 'partials/manage_customer.html',
		controller: 'customerController'
	})
	.when('/item_manage', {
		templateUrl: 'partials/manage_items.html',
		controller: 'itemController'
	})
	.when('/edit_item/:id', {
		templateUrl: 'partials/edit_items.html',
		controller: 'itemController'
	})
	// .when( {
	// 	templateUrl: 'partials/login.html',
	// 	controller: 'credentialController'
	// })
		.otherwise({
			redirectTo: '/'
		})
	});
