import express, { Router } from "express";
import { UserController } from "./user.controller";
import auth from "../../middleWares/auth";

const router = express.Router();

router.get(
  "/",
  // auth("admin", "super_admin"),
  UserController.getUsers
);
router.get(
  "/my-profile/:email",

  UserController.getProfile
);
router.get("/:id", UserController.getSingleUser);
router.patch("/:id", UserController.updatedSingleUser);
router.delete("/:id", UserController.deleteSingleUser);

export const UserRoute = router;
