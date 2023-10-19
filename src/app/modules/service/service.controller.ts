import { Service } from "./service.model";
import httpStatus from "http-status";
import { service } from "./service.service";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { NextFunction, Request, Response } from "express";
import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";

const createService = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    console.log("iii", user, req.user, "iiiii");
    const result = await service.createService(user);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service created successfully",
      data: result,
    });
  }
);

const getServices = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, paginationFields);
    const result = await service.getServices(paginationOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Services retrieved successfully",
      data: result.data,
      //@ts-ignore
      meta: result.meta,
    });
  }
);
const getSingleService = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await service.getSingleService(req.params.id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service retrieved successfully",
      data: result,
    });
  }
);

const deleteSingleService = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await service.deleteSingleService(req.params.id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service deleted successfully",
      data: result,
    });
  }
);

export const ServiceController = {
  createService,
  getServices,
  getSingleService,
  deleteSingleService,
};
