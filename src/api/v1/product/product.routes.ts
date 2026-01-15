import { Router } from "express";
import { getProductsController } from "./product.controller";

const router = Router();

router.get("/", getProductsController);

export const productRoutes = router;
