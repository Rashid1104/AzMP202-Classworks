const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: {type: String, required: true},
    decsription: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
})

const ProductModel = mongoose.model('product', ProductSchema);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/products', async (req, res) => {
    try {
        const products = await ProductModel.find({})

        res.status(200).send({
            products: products,
            message: "Success"
        })
    } catch (error) {
        res.status(500).send({
            message: "Error"
        })
    }
   

  })
  app.get('/products/:id',async (req, res) => {
    const {id} = req.params;

    const product = await ProductModel.findById(id)

    if (!product) {
        res.status(404).send({
            message: "product not found"
        })
    }
    res.status(200).send({
        product: product,
        message: "successfull!!!"
    })
  })
  app.delete('/products/:id', async (req, res) => {
    const {id} = req.params;

    const delproduct = await ProductModel.findByIdAndDelete(id)

    if (!delproduct) {
        res.status(404).send({
            message: "product not found"
        })
    }
    res.status(200).send({
       del: delproduct,
        message: "successfull!!!"
    })
  })

mongoose.connect('mongodb+srv://rasidehazmp202:rasidehazmp202@cluster0.ygqom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
    console.log('Connected!')
  });