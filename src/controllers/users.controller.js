import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import { Category } from "../models/Category.js";
import { Product } from "../models/Product.js";

// obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      order: [["id", "DESC"]],
    });
    return res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// obtener un solo usuario
export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id },
    });
    return res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// actualizar usuario id
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const userUpdate = await User.update(
      { name, email, password },
      { where: { id } }
    );
    return res.json(userUpdate);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//eliminar usuario id
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// registrar usuario
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newPassword = await bcrypt.hash(password, 8);
    const newUser = await User.create({
      name,
      email,
      password: newPassword,
    });
    return res.json(newUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// loguear para ingresar a api (categories/products)
export const loginUser = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({
      where: { email },
    });
    console.log(user);
    const passwordVerify = await bcrypt.compare(password, user.password);
    if (!passwordVerify || user.email !== email) {
      res
        .status(500)
        .json({ message: "El email y/o password son incorrectas" });
      console.log(passwordVerify);
    } else {
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        process.env.BD_SECRET
        // "my_secret_token"
      );
      return res.json({ token, user });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// obtener de un usuario las categorias y productos que fueron creados por el user logueado
export const getUserCategoryProduct = async (req, res) => {
  const { id } = req.params;
  const { category_id } = req.params;
  console.log(req.params);
  try {
    const users = await User.findAll({
      attributes: ["id", "name"],
      where: { id },

      include: [
        {
          model: Category,
          attributes: ["id", "name", "user_id"],
          // where: { user_id: id },
          required: true,
        },
        {
          model: Product,
          attributes: ["id", "name", "price_unit", "category_id", "user_id"],
          where: { category_id: category_id },
          required: true,
        },
      ],
    });
    return res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const LogoutUser = async (req, res) => {};
