import { Model } from "mongoose";

export type IUser = {
  _id?: string;
  email: string;
  role: String;
  password: string;

  name: {
    firstName: String;

    lastName: String;
  };

  address: string;
};

export type IUserLogin = {
  password: string;
  email: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type UserModel = {
  isUserExist(
    id: string
  ): Promise<Pick<IUser, "email" | "password" | "role" | "_id">>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
