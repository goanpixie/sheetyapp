app.factory('customerFactory', ['$http', function($http){

function customerFactory(){
	this.create = function(customer, callback){
		$http.post('/create_customer', customer).then(function(results){
			callback(results.data)
		})
	}
	// this.delete = function(customer, callback){
		
	// }
	this.edit = function(customer, id,  callback){
		console.log(customer, "factory")
		$http.post(`/edit_customer/${id}`, customer).then(function(results){
			callback(results.data)
		})
		
	}
	// this.show = function(customer, callback){
		
	// }
	this.all = function(callback){
		$http.get('/get_customers').then(function(results){
			callback(results.data)
		})
	}
}
return new customerFactory()	
}])
