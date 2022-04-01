const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Utils
const { catchAsync } = require('../util/catchAsync');
const { filterObj } = require('../util/filterObj');

exports.addProductToCart = async (req, res, next)=>{
  try {
   
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}
exports.getUserCar = async (req, res, next) => {
  try {
   
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
exports.updateCartProduc = async (req, res, next) => {
  try {
   
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
exports.removeProductFromCar = async (req, res, next) => {
  try {
   
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
exports.purchaseCar = async (req, res, next) => {
  try {
   
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};