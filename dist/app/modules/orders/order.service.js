"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const order_model_1 = require("./order.model");
const createOrder = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const createService = yield order_model_1.Order.create(user);
    if (!createService) {
        throw new ApiError_1.default(400, "Failed to create order");
    }
    return createService;
});
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const getUsers = yield order_model_1.Order.find().select({
        createdAt: 0,
        updatedAt: 0,
    });
    return getUsers;
});
const getOrderByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const getUsers = yield order_model_1.Order.find({ email: email });
    return getUsers;
});
exports.orderService = {
    createOrder,
    getOrders,
    getOrderByEmail,
};
