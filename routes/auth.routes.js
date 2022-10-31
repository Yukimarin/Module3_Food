import express from "express";
import { signup, signin } from "../controllers/auth.controller.js";
const router = express.Router();

// CRATE A USER
router.post("/signup", signup);
// SIGN IN
router.post("/signin", signin);
export default router;
