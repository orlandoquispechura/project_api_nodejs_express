import express from "express";
import morgan from "morgan";

const app = express();
// import routes

import usersRoutes from "./routes/users.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import productsRoutes from "./routes/products.routes.js";
import {
  LogoutUser,
  getUserCategoryProduct,
  loginUser,
  registerUser,
} from "./controllers/users.controller.js";

// middleware
app.use(morgan("dev"));
app.use(express.json());

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerNew = bearerHeader.split(" ");
    const bearerToken = bearerNew[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).json({
      message: "Token inválido ",
    });
  }
}
//Routes
app.get("/api/users/:id/categories/:category_id/products", getUserCategoryProduct);
app.use("/api/users", usersRoutes);
app.post("/api/register", registerUser);
app.post("/api/login", loginUser);
app.post("/api/logout", LogoutUser);
app.use("/api/categories", verifyToken, categoriesRoutes);
app.use("/api/products", verifyToken, productsRoutes);

//export app
export default app;
