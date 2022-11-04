import express from "express";
import {
  cretaeRestaurant,
  loginRestaurant,
} from "../controllers/restaurant.controller.js";
const router = express.Router();

router.post("/signup", cretaeRestaurant);
router.post("/login", loginRestaurant);
export default router;
