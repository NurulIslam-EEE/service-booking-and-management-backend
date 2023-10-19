import express, { Router } from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post(
  "/create-order",

  OrderController.createOrder
);

router.get(
  "/",

  OrderController.getAllOrder
);
router.get(
  "/:email",

  OrderController.getUserOrder
);
export const OrderRoute = router;
