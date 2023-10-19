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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("./user.model");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const getUsers = yield user_model_1.User.find().select({
        createdAt: 0,
        updatedAt: 0,
    });
    return getUsers;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const getUser = yield user_model_1.User.findOne({ _id: id }).select({
        createdAt: 0,
        updatedAt: 0,
    });
    return getUser;
});
const updateSingleUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updateUser = yield user_model_1.User.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return updateUser;
});
const deleteSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteUser = yield user_model_1.User.findByIdAndDelete({ _id: id });
    return deleteUser;
});
const getProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: id }).select({
        createdAt: 0,
        updatedAt: 0,
    });
    return user;
});
const updateProfile = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return user;
});
exports.UserService = {
    getUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
    getProfile,
    updateProfile,
};
