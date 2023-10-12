import ApiError from "../../../errors/ApiError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, "Failed to create user");
  }
  const strData = JSON.stringify(createUser);
  const { password, createdAt, updatedAt, ...others } = JSON.parse(strData);
  return others;
};

export const autService = {
  createUser,
};
