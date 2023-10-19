import ApiError from "../../../errors/ApiError";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import {
  IGenericErrorResponse,
  IGenericResponse,
} from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IService } from "./service.interface";
import { Service } from "./service.model";

const createService = async (user: IService): Promise<IService | null> => {
  const createService = await Service.create(user);
  if (!createService) {
    throw new ApiError(400, "Failed to create user");
  }

  return createService;
};

const getServices = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IService[] | null>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  const getUsers = await Service.find().skip(skip).limit(limit);
  const total = await Service.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: getUsers,
  };
};

const getSingleService = async (id: string): Promise<IService | null> => {
  const getUser = await Service.findOne({ _id: id }).select({
    createdAt: 0,
    updatedAt: 0,
  });

  return getUser;
};

const deleteSingleService = async (id: string): Promise<IService | null> => {
  const deleteUser = await Service.findByIdAndDelete({ _id: id });

  return deleteUser;
};

export const service = {
  createService,
  getServices,
  getSingleService,
  deleteSingleService,
};
