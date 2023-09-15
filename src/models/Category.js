import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Product } from "./Product.js";

export const Category = sequelize.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

// relación uno a muchos (cateries, products)
Category.hasMany(Product, {
  foreignKey: "category_id",
  sourceKey: "id",
});
Product.belongsTo(Category, {
  foreignKey: "category_id",
  targetKey: "id",
});
