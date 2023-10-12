import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interfaces/error";

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );
  const statusCode = 4000;

  return {
    statusCode,
    message: "validation error",
    errorMessages: errors,
  };
};

export default handleValidationError;
