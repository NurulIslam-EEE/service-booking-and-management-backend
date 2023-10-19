import express, { Router } from "express";
import { authController } from "./auth.controller";

const router = express.Router();

router.post("/login", authController.loginUser);
router.post("/signup", authController.createUser);
router.get("/refersToken", authController.refreshToken);

export const AuthRoute = router;
