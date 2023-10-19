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
exports.service = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const service_model_1 = require("./service.model");
const createService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const createService = yield service_model_1.Service.create(user);
    if (!createService) {
        throw new ApiError_1.default(400, "Failed to create user");
    }
    return createService;
});
const getServices = (paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const getUsers = yield service_model_1.Service.find().skip(skip).limit(limit);
    const total = yield service_model_1.Service.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: getUsers,
    };
});
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield service_model_1.Service.findOne({ _id: id }).select({
        createdAt: 0,
        updatedAt: 0,
    });
    return getUser;
});
const deleteSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteUser = yield service_model_1.Service.findByIdAndDelete({ _id: id });
    return deleteUser;
});
exports.service = {
    createService,
    getServices,
    getSingleService,
    deleteSingleService,
};
