const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Utils
const { catchAsync } = require('../util/catchAsync');

exports.addProduct = async (req, res, next) => {
  try {
    const allUsers = await prisma.users.findMany();

    res.status(200).json({
      status: 'success',
      data: { allUsers }
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
exports.updateCart = async (req, res, next) => {
  try {
    const allUsers = await prisma.users.findMany();

    res.status(200).json({
      status: 'success',
      data: { allUsers }
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    const allUsers = await prisma.users.findMany();

    res.status(200).json({
      status: 'success',
      data: { allUsers }
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
exports.purchase = async (req, res, next) => {
  try {
    const allUsers = await prisma.users.findMany();

    res.status(200).json({
      status: 'success',
      data: { allUsers }
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};