import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Product = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  price_unit: {
    type: DataTypes.DECIMAL(),
  },
  statu: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
