const express = require('express');

const router = express.Router();

const {
    addProduct,
    updateCart,
    deleteProduct,
    purchase
} = require('../controllers/carts.Controller')

router.post('/add-product', addProduct)
router.patch('update-cart', updateCart)
router.delete('/:product', deleteProduct)
router.post('/purchase', purchase)