const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await prisma.users.findMany({
      where: {status: 'active'}
    });
    res.status(200).json({
      status: 'success',
      data: { allProducts }
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { title, description, price, quantity } = req.body;

    const product = await prisma.products.create({
      data: { title, description, price, quantity }
    });

    res.status(200).json({
      status: 'success',
      data: { product }
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(404).json({
        msg: 'Cant no found product wiht the given ID'
      })
    }
    const result = await prisma.products.findUnique({
      where:{ id }
    });
    res.status(200).json({
      status: 'success',
      data: { result }
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const {title, description, price, quantity} = req.params

    const product = await prisma.products.update({
      where: { id },
      data: { 
        title,
        description,
        price,
        quantity 
      }
    });

    res.status(200).json({
      status: 'success',
      data: { product }
    });
    
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await prisma.products.update({
      where: { id },
      data: { status: 'delete' }
    });
    res.status(200).json({
      status: 'success',
      data: { product }
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
