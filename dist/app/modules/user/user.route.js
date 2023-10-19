"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get("/", 
// auth("admin", "super_admin"),
user_controller_1.UserController.getUsers);
router.get("/my-profile/:email", user_controller_1.UserController.getProfile);
router.get("/:id", user_controller_1.UserController.getSingleUser);
router.patch("/:id", user_controller_1.UserController.updatedSingleUser);
router.delete("/:id", user_controller_1.UserController.deleteSingleUser);
exports.UserRoute = router;
