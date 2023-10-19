"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    picture: {
        type: String,
        required: [true, "Please Provide a picture"],
    },
    description: {
        type: String,
        required: [true, "Please Provide a description"],
    },
}, {
    timestamps: true,
});
exports.Service = (0, mongoose_1.model)("Service", serviceSchema);
