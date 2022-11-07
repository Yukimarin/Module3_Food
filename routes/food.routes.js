import express from "express";
import { createFood } from "../controllers/food.controller.js";
import { show } from "../controllers/home.controller.js";
const router = express.Router();

router.get("/food", show);
router.post("/signup", createFood);
export default router;
