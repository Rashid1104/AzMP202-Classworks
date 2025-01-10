const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
},
{versionKey: false}
)
const ProductModel = mongoose.model('products', ProductSchema)

module.exports = ProductModel;