"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    schedule: {
        type: String,
        required: [true, "Please Provide a date"],
    },
    inquiry: {
        type: String,
        required: [true, "Please Provide a inquiry"],
    },
}, {
    timestamps: true,
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
