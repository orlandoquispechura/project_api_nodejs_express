import { Router } from "express";
import {
  addCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controllers/categories.controller.js";

const router = Router();

router.get("/", getCategories);
router.post("/", addCategory);
router.get("/:id", getCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);


export default router;
