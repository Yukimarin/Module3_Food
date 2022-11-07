import express from "express";
import {
  createFood,
  update,
  del,
  show,
} from "../controllers/food.controller.js";
const router = express.Router();

router.get("/", show);
router.post("/signup", createFood);

router.put("/", update);
router.delete("/", del);
export default router;
