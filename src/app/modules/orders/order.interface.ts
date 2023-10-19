import { Model, Types } from "mongoose";

export type IOrder = {
  name: string;
  service: string;
  email: string;
  schedule: string;
  inquiry: string;
};

export type OrderModel = Model<IOrder, Record<string, unknown>>;
