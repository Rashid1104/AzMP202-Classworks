const express = require("express")
const {
    getAllProducts,
    getProductById,
    DeleteProduct,
    AddProduct,
    UpdateProduct,
} = require("../Controllers/ProductController")

const router = express.Router();

router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.delete("/:id",DeleteProduct);
router.post("/",AddProduct);
router.put("/:id",UpdateProduct)

module.exports = router;

