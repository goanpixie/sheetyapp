app.controller('batchController', ['$scope', 'batchFactory', '$location', '$cookies', '$routeParams', function($scope, batchFactory, $location, $cookies, $routeParams){
	$scope.customers;
	$scope.perpounds;
	$scope.peritems;
	$scope.queue =[];

	$scope.getCustomers = function(){
		batchFactory.allCustomers(function(results){
			$scope.customers=results;
		});
	}
	$scope.getPerPounds = function(){
		batchFactory.getPounds(function(results){
			$scope.perpounds = results;
		});
	}
	$scope.getPerItems = function(){
		batchFactory.getItems(function(results){
			$scope.peritems = results;
		});
	}
	$scope.getCustomers();
	$scope.getPerPounds();
	$scope.getPerItems();

	$scope.selectItem = function(price, charge){
		var arr = $scope.peritems;
		for (var i=0; i<arr.length; i++){
			if ($scope.queuedItem.index == i){
				$scope.queuedItem.name = arr[i].name;
				$scope.queuedItem.charge = arr[i].charge;
				$scope.queuedItem.price = arr[i].price;
			}
		}
		$scope.queuedItem.subtotal = parseInt($scope.queuedItem.price)*parseInt($scope.queuedItem.quantity);
		$scope.queue.push($scope.queuedItem);
		console.log($scope.queue);
		$scope.queuedItem = {};
	}
	$scope.addBatch


}]);