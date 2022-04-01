const { body, validationResult } = require('express-validator');

// Utils
const { AppError } = require('../utils/appError');

// User routes validations
exports.createUserValidations = [
	body('email').isEmail().notEmpty().withMessage('Enter a valid email'),
	body('password')
		.isAlphanumeric()
		.withMessage(`Password must include letters and numbers`)
		.isLength({ min: 6, max: 20 })
		.withMessage('Password must be 8 characters long'),
];

exports.loginUserValidations = [
	body('email').isEmail().notEmpty().withMessage('Credentials are not valid'),
	body('password').notEmpty().withMessage('Credentials are not valid'),
];

exports.createProductValidations = [
	// Title can't be empty
	body('title').isString().notEmpty().withMessage('Enter a valid name'),
	// Description can't be empty
	body('description')
		.isString()
		.notEmpty()
		.withMessage('Enter a valid description'),
	body('brand').isString().notEmpty().withMessage('Enter a valid brand name'),
	// Price must be a decimal
	body('price')
		.isDecimal()
		.withMessage('Price must be a decimal')
		.custom(value => value > 0)
		.withMessage('Enter a valid price'),
	body('quantity')
		.isNumeric()
		.withMessage('Quantity must be a number')
		.custom(value => value > 0)
		.withMessage('Enter a valid price'),
	body('categoryId')
		.isNumeric()
		.notEmpty()
		.withMessage('Must provide a valid category ID'),
];
