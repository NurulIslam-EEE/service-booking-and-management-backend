import httpStatus from "http-status";
import { autService } from "./auth.service";
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    console.log("controller", user);
    const result = await autService.createUser(user);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User created successfully",
      data: result,
    });
    next();
  }
);

export const authController = {
  createUser,
};
