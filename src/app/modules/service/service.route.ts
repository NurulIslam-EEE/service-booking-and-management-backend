import express, { Router } from "express";

const router = express.Router();

router.post("/create-service");

export const ServiceRoute = router;
