import { Secret } from "jsonwebtoken";
import config from "../../config";
import { jwtHelpers } from "../../helpers/jwtHelpers";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      console.log("t111", token);
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }

      let verifiedUser = null;
      console.log("t2222", token);
      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);
      console.log("t33333", token);
      req.user = verifiedUser;

      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, "Forbidden");
      }
      console.log("t44444", token);
      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
