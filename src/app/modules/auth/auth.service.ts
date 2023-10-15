import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import {
  IRefreshTokenResponse,
  IUser,
  IUserLogin,
} from "../user/user.interface";
import { User } from "../user/user.model";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import { Secret } from "jsonwebtoken";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, "Failed to create user");
  }
  const strData = JSON.stringify(createUser);
  const { password, createdAt, updatedAt, ...others } = JSON.parse(strData);
  return others;
};

const loginUser = async (loginData: IUserLogin) => {
  const { email, password } = loginData;
  if (!email || !password) {
    throw new ApiError(400, "Please provide phone number and password");
  }

  const isUserExist = await User.isUserExist(email);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }

  // console.log("exist", isUserExist);

  const matchPassword = await User.isPasswordMatched(
    password,
    isUserExist.password
  );

  if (!matchPassword) {
    throw new ApiError(httpStatus.NOT_FOUND, "Password is incorrect");
  }

  const { _id, role, email: userEmail } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { _id, role, email: userEmail },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { _id, role, userEmail },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  //verify token
  // invalid token - synchronous
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid Refresh Token");
  }

  const { _id } = verifiedToken;

  console.log("cookie", verifiedToken);

  // tumi delete hye gso  kintu tumar refresh token ase
  // checking deleted user's refresh token

  const isUserExist = await User.findOne({ _id: _id });
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }
  //generate new token

  const newAccessToken = jwtHelpers.createToken(
    {
      _id: isUserExist._id,
      role: isUserExist.role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const autService = {
  createUser,
  loginUser,
  refreshToken,
};
