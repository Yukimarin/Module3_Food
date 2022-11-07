import express from "express";
import {
  cretaeRestaurant,
  loginRestaurant,
  index,
} from "../controllers/restaurant.controller.js";
const router = express.Router();

router.post("/", cretaeRestaurant);
router.post("/login", loginRestaurant);
router.get("/", index);

export default router;
