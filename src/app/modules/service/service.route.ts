import auth from "../../middleWares/auth";
import { ServiceController } from "./service.controller";
import express, { Router } from "express";

const router = express.Router();

router.post(
  "/create-service",
  // auth("admin", "super_admin"),
  ServiceController.createService
);
router.get("/", ServiceController.getServices);
router.get("/:id", ServiceController.getSingleService);
router.delete(
  "/:id",
  // auth("admin", "super_admin"),
  ServiceController.deleteSingleService
);

export const ServiceRoute = router;
