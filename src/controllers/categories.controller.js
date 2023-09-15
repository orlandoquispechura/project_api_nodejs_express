import { Category } from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      order: [["id", "DESC"]],
    });
    return res.json(categories);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addCategory = async (req, res) => {
  const { name, user_id } = req.body;
  try {
    const newCategory = await Category.create({
      name,
      user_id,
    });
    return res.json(newCategory);
  }catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const categorie = await Category.findOne({ where: { id } });
    return res.json(categorie);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const categorie = await Category.findOne({
      attributes: ["name", "user_id", "id"],
      where: { id },
    });
    categorie.set(req.body);
    await categorie.save();
    return res.json(categorie);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
console.log(id);
  try {
    await Category.destroy({
      where: { id: id },
    });
    return res.sendStatus(204);
  }catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
