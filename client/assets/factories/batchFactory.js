app.factory('batchFactory', ['$http', function($http){

	function batchFactory(){
		this.create = function(batch, callback){

		}
		this.status = function(batch, callback){
			
		}
		this.delete = function(batch, callback){
			
		}
		this.edit = function(batch, callback){
			
		}
		this.show = function(batch, callback){
			
		}
		this.allCustomers = function(callback){
			$http.get('/get_customers').then(function(results){
				callback(results.data);
			});
		}
		this.getPounds = function(callback){
			$http.get('/get_perpounds').then(function(results){
				callback(results.data);
			});
		}
		this.getItems = function(callback){
			$http.get('/get_peritems').then(function(results){
				callback(results.data);
			});
		}
	}
	return new batchFactory()	
}]);