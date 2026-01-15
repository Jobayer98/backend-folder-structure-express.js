import { Request, Response } from "express";
import { asyncHandler } from "../../../core/utils/async-handler";

export const getProductsController = asyncHandler(
  (req: Request, res: Response) => {
    res.json({ message: "Get all products" });
  }
);
