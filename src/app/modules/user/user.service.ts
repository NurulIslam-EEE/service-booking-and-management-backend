import { IUser } from "./user.interface";
import { User } from "./user.model";

const getUsers = async (): Promise<IUser[] | null> => {
  const getUsers = await User.find().select({
    createdAt: 0,
    updatedAt: 0,
  });

  return getUsers;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const getUser = await User.findOne({ _id: id }).select({
    createdAt: 0,
    updatedAt: 0,
  });

  return getUser;
};

const updateSingleUser = async (
  id: string,
  data: Partial<IUser>
): Promise<IUser | null> => {
  const updateUser = await User.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  return updateUser;
};

const deleteSingleUser = async (id: string): Promise<IUser | null> => {
  const deleteUser = await User.findByIdAndDelete({ _id: id });

  return deleteUser;
};

const getProfile = async (id: string): Promise<IUser | null> => {
  const user = await User.findOne({ _id: id }).select({
    createdAt: 0,
    updatedAt: 0,
  });

  return user;
};

const updateProfile = async (
  id: string,
  data: Partial<IUser>
): Promise<IUser | null> => {
  const user = await User.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  return user;
};

export const UserService = {
  getUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  getProfile,
  updateProfile,
};
