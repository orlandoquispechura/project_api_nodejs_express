import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/User.js";

const PORT = 3000;
async function main() {
  try {
    await sequelize.sync({ force: false });   
    app.listen(PORT);
    console.log(`escuchando port ${PORT}`);
  } catch (error) {}
}

main();
