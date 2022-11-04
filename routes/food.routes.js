import express from "express";
import { createFood } from "../controllers/food.controller.js";
const router = express.Router();
router.post("/signup", createFood);
export default router;
