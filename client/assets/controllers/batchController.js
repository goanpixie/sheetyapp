app.controller('batchController', ['$scope', 'batchFactory', '$location', '$cookies', '$routeParams', function($scope, batchFactory, $location, $cookies, $routeParams){
	$scope.customers;
	$scope.perpounds;
	$scope.peritems;

	$scope.getCustomers = function(){
		batchFactory.allCustomers(function(results){
			$scope.customers=results;
		});
	}
	$scope.getPerPounds = function(){
		batchFactory.getPounds(function(results){
			$scope.perpounds = results
		});
	}
	$scope.getPerItems = function(){
		batchFactory.getItems(function(results){
			$scope.peritems = results
		});
	}
	$scope.getCustomers();
	$scope.getPerPounds();
	$scope.getPerItems();
}]);