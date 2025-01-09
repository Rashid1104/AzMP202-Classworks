const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 8080
const mongoose = require('mongoose'); 
const { Schema } = mongoose;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
        
const ProductSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, required: true},
    category: { type: String, required: true},
})

const ProductModel = mongoose.model("Products", ProductSchema);

app.delete('/products/:id',  async (req, res) => {
    const {id} = req.params;

    const Delproduct = await ProductModel.findByIdAndDelete(id);

    if(!Delproduct){
        app.status(404).send({
            message: "product not found!!!"
        })
    }
app.status(200).json({
    del: Delproduct,
    message: "success!!!"
})

})
app.get('/products/:id', async (req, res) => {
    const {id} = req.params;

    const product = await ProductModel.findById(id)

    if(!product){
        res.status(404).send({
            message: "product not found!!!"
        })
    }
    res.status(200).json({
    product: product,
    message: "success!!!"
})
})
app.get('/products',async (req, res) => {
    try {
        const products = await ProductModel.find({})

        res.status(200).json({ data: products, message: "success!" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})
app.get('/', (req, res) => {})

mongoose.connect('mongodb+srv://rasidehazmp202:rasidehazmp202@cluster0.ygqom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
    console.log('Connected!')
  });