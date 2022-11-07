import express from "express";
import { update, show } from "../controllers/admin.controller.js";
import { signin } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", show);
router.put("/restaurant", update);

export default router;
