import express from "express";
import { update, show } from "../controllers/admin.controller.js";
const router = express.Router();

router.get("/", show);
router.get("/restaurant", update);
export default router;
