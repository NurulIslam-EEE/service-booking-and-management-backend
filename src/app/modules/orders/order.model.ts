import { Schema, model } from "mongoose";

import { IOrder, OrderModel } from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const Order = model<IOrder, OrderModel>("Order", orderSchema);
