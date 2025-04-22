import express from "express";
import { Login, Logout, Register, updateProfile } from "../Controllers/normal.user.controller.js";
import { protectRoute } from "../Middlewares/authentication.middleware.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);
router.put("/update/:id", protectRoute, updateProfile);
export default router;