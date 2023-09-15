import 'dotenv/config'
import { Sequelize } from "sequelize";


export const sequelize = new Sequelize( process.env.BD_DATABASE,process.env.BD_USER, process.env.BD_PASSWORD, {
  host: process.env.BD_LOCAL,
  dialect: "postgres",
});
