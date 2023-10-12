import express, { Router } from "express";
import { authController } from "./auth.controller";

const router = express.Router();

router.get("/login", authController.loginUser);
router.post("/signup", authController.createUser);

export const AuthRoute = router;
