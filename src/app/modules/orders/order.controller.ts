import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { NextFunction, Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const order = req.body;

    const result = await orderService.createOrder(order);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Order created successfully",
      data: result,
    });
  }
);

const getAllOrder = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await orderService.getOrders();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Orders fetched successfully",
      data: result,
    });
  }
);

const getUserOrder = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.params.email;

    console.log("eeee", email);

    const result = await orderService.getOrderByEmail(email);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Order created successfully",
      data: result,
    });
  }
);

export const OrderController = {
  createOrder,
  getUserOrder,
  getAllOrder,
};
