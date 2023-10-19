import { Model, Types } from "mongoose";

export type IService = {
  title: string;
  price: number;

  picture: string;
  description: string;
};

export type ServiceModel = Model<IService, Record<string, unknown>>;
