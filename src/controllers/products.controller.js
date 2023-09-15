import { Product } from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      order: [["id", "DESC"]],
    });
    return res.json(products);
  } catch (error) {
    res.sendStatus(500).json({
      message: error.message,
    });
  }
};

export const addProduct = async (req, res) => {
  const { name, price_unit, category_id, user_id } = req.body;
  try {
    const product = await Product.create({
      name,
      price_unit,
      category_id,
      user_id,
    });
    return res.json(product);
  } catch (error) {
    res.sendStatus(500).json({
      message: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id },
    });
    return res.json(product);
  } catch (error) {
    res.sendStatus(500).json({
      message: error.message,
    });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price_unit, statu, category_id, user_id } = req.body;
  try {
    const upProduct = await Product.update(
      {
        name: name,
        price_unit: price_unit,
        category_id: category_id,
        statu: statu,
        user_id: user_id,
      },
      {
        where: { id: id },
      }
    );
    return res.json(upProduct);
  } catch (error) {
    res.sendStatus(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500).json({
      message: error.message,
    });
  }
};
