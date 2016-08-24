app.controller('customerController', ['$scope', 'customerFactory', '$location', '$cookies', '$routeParams', function($scope, customerFactory, $location, $cookies, $routeParams){
$scope.success;
$scope.customers;
$scope.id = $routeParams.id

$scope.allCustomers = function(){
	customerFactory.all(function(results){
		$scope.customers = results
	})
}
$scope.allCustomers()

$scope.addCustomer = function(){
	customerFactory.create($scope.newCustomer, function(results){
		$scope.success = results.name
		$scope.newCustomer = {};	
	})
	$scope.allCustomers()
}

$scope.updateCustomer = function(){
	customerFactory.edit($scope.editCustomer, $scope.id, function(results){
		$location.url('/customer_manage')
	})
}
}])