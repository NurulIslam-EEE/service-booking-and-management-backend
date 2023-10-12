import express, { Router } from "express";

const router = express.Router();

router.get("/my-profile");

export const UserRoute = router;
