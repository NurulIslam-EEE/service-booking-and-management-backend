import { Schema, model } from "mongoose";
import { IService, ServiceModel } from "./service.interface";

const serviceSchema = new Schema<IService>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const Service = model<IService, ServiceModel>("Service", serviceSchema);
