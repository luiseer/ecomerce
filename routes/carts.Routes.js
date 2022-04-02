const express = require('express');

// Controller
const {
  addProductToCart,
  getUserCart,
  updateCartProduct,
  removeProductFromCart,
  purchaseCart
} = require('../controllers/carts.Controller');

// Middleware
const { validateSession } = require('../middlewares/auth.middleware');
const {
  addProductToCartValidation,
  validateResult
} = require('../middlewares/validator.middleware');

const router = express.Router();

router.use(validateSession);

router.get('/', getUserCart);

router.post(
  '/add-product',
  addProductToCartValidation,
  validateResult,
  addProductToCart
);

router.patch('/update-product', updateCartProduct);

router.post('/purchase', purchaseCart);

router.delete('/:productId', removeProductFromCart);

module.exports = { cartRouter: router };