const express = require('express');

const router = express.Router();

// Controllers
const {
  getAllUsers,
  createNewUser,
  loginUser,
  userProducts,
  updateUser,
  deleteUser,
  getOrdersUser,
  getOrderById
} = require('../controllers/users.Controllers');

router.post('/', createNewUser);
router.post('/login', loginUser)
router.get('/me', userProducts)

router
  .route('/id')
  .patch(updateUser)
  .delete(deleteUser)

router.get('/orders', getOrdersUser)
router.get('/orders/:id', getOrderById)



router.post('/create', createNewUser);

module.exports = { usersRouter: router };
