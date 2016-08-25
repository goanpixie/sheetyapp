app.factory('customerFactory', ['$http', function($http){
	function customerFactory(){
		this.create = function(customer, callback){
			$http.post('/create_customer', customer).then(function(results){
				callback(results.data);
			})
		}
		this.delete = function(id, callback){
			$http.post('/delete_customer', id).then(function(results){
				callback(results.data);
			});
		}
		this.edit = function(customer, id,  callback){
			$http.post(`/edit_customer/${id}`, customer).then(function(results){
				callback(results.data);
			});
		}
		this.all = function(callback){
			$http.get('/get_customers').then(function(results){
				callback(results.data);
			});
		}
	}
	return new customerFactory();	
}]);
