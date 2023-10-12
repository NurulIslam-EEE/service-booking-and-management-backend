import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

import router from "./app/routes";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middleWares/globalErrorHandlers";

import cookieParser from "cookie-parser";

const app: Application = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Database connection successful",
  });
  next();
});

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "not found",
    errorMessages: [{ path: req.originalUrl, message: "api not found" }],
  });
  next();
});

export default app;
