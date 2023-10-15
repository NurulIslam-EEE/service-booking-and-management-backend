import express, { Router } from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", UserController.getUsers);

export const UserRoute = router;
