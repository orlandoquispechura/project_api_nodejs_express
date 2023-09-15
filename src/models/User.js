import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Category } from "./Category.js";
import { Product } from "./Product.js";

export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      notNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      notNull: false,
    },
    statu: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize }
);
// relación uno a muchos (users,categories)
User.hasMany(Category, {
  foreignKey: "user_id",
  sourceKey: "id",
});
Category.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

// relación uno a muchos (users, products)
User.hasMany(Product, {
  foreignKey: "user_id",
  sourceKey: "id",
});
Product.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});
