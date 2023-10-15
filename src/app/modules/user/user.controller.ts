import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.getUsers();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Users retrieved successfully",
      data: result,
    });
  }
);
const getSingleUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.getSingleUser(req.params.id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User retrieved successfully",
      data: result,
    });
  }
);

const updatedSingleUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.updateSingleUser(req.params.id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User updated successfully",
      data: result,
    });
  }
);

const deleteSingleUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.deleteSingleUser(req.params.id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  }
);

// const getProfile = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const id = req.user?._id;
//     const result = await UserService.getProfile(id);

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "User's information retrieved successfully",
//       data: result,
//     });
//   }
// );

// const updateProfile = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const id = req.user?._id;
//     const result = await UserService.updateProfile(id, req.body);

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "User's information retrieved successfully",
//       data: result,
//     });
//   }
// );

export const UserController = {
  getUsers,
  getSingleUser,
  updatedSingleUser,
  deleteSingleUser,
  //   getProfile,
  //   updateProfile,
};
