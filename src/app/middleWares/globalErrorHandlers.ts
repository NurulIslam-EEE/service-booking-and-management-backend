/* eslint-disable no-console */
import { ErrorRequestHandler } from "express";
import { IGenericErrorMessage } from "../../interfaces/error";

import handleValidationError from "../../errors/handleValidationError";
import ApiError from "../../errors/ApiError";
import config from "../../config";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // eslint-disable-next-line no-unused-expressions

  let statusCode = 400;
  let message = "Something went wrong";

  let errorMessages: IGenericErrorMessage[] = [];

  if (error.name === "validationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message,
          },
        ]
      : [];
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? error?.stack : undefined,
  });
  next();
};

export default globalErrorHandler;
