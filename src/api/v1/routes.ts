import { Router } from "express";
import { productRoutes } from "./product/product.routes";

export function registerV1Routes(router: Router) {
  router.use("/products", productRoutes);
}
