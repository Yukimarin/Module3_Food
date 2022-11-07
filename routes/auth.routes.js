import express from "express";
import { signup, signin, logout } from "../controllers/auth.controller.js";
const router = express.Router();

// CRATE A USER
router.post("/signup", signup);
// SIGN IN
router.post("/signin", signin);

router.get("/login-admin", (req, res) => {
  res.render("login-admin");
});
router.post("/login-admin", signin);

router.post("/logout", logout);

export default router;
