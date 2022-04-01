const express = require('express')

const router = express.Router()

const { createProductValidations } = require('../middlewares/validator.middleware')
const { validateSession, protectAccountOwner } = require('../middlewares/auth.middleware')
const {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/products.Controllers')

router.use(validateSession)

router
    .route('/')
    .post(createProductValidations, createProduct)
    .get(getAllProducts)

router
    .route('/:id')
    .get(getProductById)
    .patch(protectAccountOwner, updateProduct)
    .delete(protectAccountOwner, deleteProduct)

module.exports = { productsRouter: router }
