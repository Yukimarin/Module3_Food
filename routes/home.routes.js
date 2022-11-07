import express from "express";
// import { show } from "../controllers/home.controller.js";
import { show } from "../controllers/home.controller.js";
const router = express.Router();

router.get("/", show);

router.get("/food", (req, res) => {
  res.render("food");
});
router.get("/user-info", (req, res) => {
  res.render("user-info");
});
router.get("/purchase", (req, res) => {
  res.render("purchase");
});
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

export default router;
