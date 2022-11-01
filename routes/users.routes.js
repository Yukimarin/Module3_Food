import express from "express";
import { update } from "../controllers/users.controller.js";
import { verifyToken } from "../verifyToken.js";
import Swal from "sweetalert2";
const router = express.Router();

// update user
router.put("/:id", verifyToken, update);

//delete user
export default router;
