import express from "express";
import { signup, signin, signout } from "../controllers/auth.controller.js";
const router = express.Router();

// CRATE A USER
router.post("/signup", signup);
// SIGN IN
router.post("/signin", signin);
// SIGN OUT
router.post("/signout", signout);

export default router;
