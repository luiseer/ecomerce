const express = require('express')

const router = express.Router()

const {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/products.Controllers')

router
    .route('/')
    .post(createProduct)
    .get(getAllProducts)

router
    .route('/:id')
    .get(getProductById)
    .patch(updateProduct)
    .delete(deleteProduct)

module.exports = { productsRouter: router }
