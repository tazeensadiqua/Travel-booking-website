import express from "express";
import { login, register, adminregister } from "./../controllers/authController.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login );


export default router;