import { Router } from "express";
import {
  deleteUser,  
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users.controller.js";

const router = Router();

// routes
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


export default router;
