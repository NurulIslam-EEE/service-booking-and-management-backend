import ApiError from "../../../errors/ApiError";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (user: IOrder): Promise<IOrder | null> => {
  const createService = await Order.create(user);
  if (!createService) {
    throw new ApiError(400, "Failed to create order");
  }

  return createService;
};

const getOrders = async (): Promise<IOrder[] | null> => {
  const getUsers = await Order.find().select({
    createdAt: 0,
    updatedAt: 0,
  });

  return getUsers;
};
const getOrderByEmail = async (email: string): Promise<IOrder[] | null> => {
  const getUsers = await Order.find({ email: email });

  return getUsers;
};
export const orderService = {
  createOrder,
  getOrders,
  getOrderByEmail,
};
