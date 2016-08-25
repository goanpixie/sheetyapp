var linens = require('../controllers/linens.js')
module.exports = function(app){
	app.post('/create_customer', linens.createCustomer);
	app.get('/get_customers', linens.getCustomers);
	app.post('/edit_customer/:id', linens.editCustomer);
	app.post('/delete_customer', linens.deleteCustomer);
}

