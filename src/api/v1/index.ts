import { Router } from "express";
import { registerV1Routes } from "./routes";

const router = Router();

registerV1Routes(router);

export default router;
