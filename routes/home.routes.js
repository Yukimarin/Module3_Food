import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/menu", (req, res) => {
  res.render("menu");
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
