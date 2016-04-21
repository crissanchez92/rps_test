//dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema
var productsSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});

//return model
module.exports = restful.model('Products', productsSchema);