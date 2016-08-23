var mongoose = require('mongoose');
var Batches = mongoose.model('Batches');
var Items = mongoose.model('Items');
var Customers = mongoose.model('Customers');
function LinensController(){
}
module.exports = new LinensController();