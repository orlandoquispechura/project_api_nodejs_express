import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", getProducts);
router.post("/", addProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
