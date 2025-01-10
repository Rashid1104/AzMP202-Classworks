const ProductModel = require("../models/ProductModels")

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({})

        res.status(200).json({
            products: products,
            message: "success!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "invalid products!!!"
        })
    }
}
const getProductById = async (req, res) => {
    try {
        const {id} = req.params

        const product = await ProductModel.findById(id)
        res.status(200).json({
            product: product,
            message: "Porduct successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "invalid product!!!"
        })
    }
}
 const DeleteProduct = async (req, res) => {
    try {
        const {id} = req.params

        const delProduct = await ProductModel.findByIdAndDelete(id)
        res.status(200).json({
            Del: delProduct,
            message: "Porduct successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "invalid product!!!"
        })
    }
}
const AddProduct = async (req, res) => {
    const {title,description,price,category} = req.body

    if (!title || !description || !price || !category) {
       return res.status(400).json({
        message: "Bad Request! All fileds should be add!"
        })
    }
    try {
        const AddProduct = ProductModel({ ...req.body })       
        await AddProduct.save()
        res.status(201).json({
            New: AddProduct,
            message: "Add successfull!!!"
        })
    } catch (error) {
        res.status(500).json({
            message: "invalid add product!!!"
        })
    }
}
const UpdateProduct = async (req, res) => {
    try {
        const {id} = req.params

        const UpdateProduct = await ProductModel.findByIdAndUpdate(id,{...req.body},{new: true})
        const products = await ProductModel.find({})
        if (UpdateProduct) {
            res.status(200).json({
            UpdateProduct,
            products,
            message: "Porduct edit successfull!!!"
        })
        }else{
            res.status(404).json({
                message: "Error!!!"
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: "invalid product!!!"
        })
    }
}
module.exports = {
    getAllProducts,
    getProductById,
    DeleteProduct,
    AddProduct,
    UpdateProduct,
}
