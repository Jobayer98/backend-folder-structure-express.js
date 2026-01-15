import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: { statusCode: number; message: string },
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  res.status(500).json({
    message: "Internal Server Error",
  });
}
