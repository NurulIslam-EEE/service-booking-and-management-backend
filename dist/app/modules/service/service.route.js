"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoute = void 0;
const service_controller_1 = require("./service.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/create-service", 
// auth("admin", "super_admin"),
service_controller_1.ServiceController.createService);
router.get("/", service_controller_1.ServiceController.getServices);
router.get("/:id", service_controller_1.ServiceController.getSingleService);
router.delete("/:id", 
// auth("admin", "super_admin"),
service_controller_1.ServiceController.deleteSingleService);
exports.ServiceRoute = router;
