import express from "express";

import v1Routes from "./api/v1";
import healthRoute from "./api/health/health.route";
import { errorHandler } from "./core/middlewares/error.middleware";

const app = express();

// register middleware
app.use(express.json());

// register routes
app.use("/api/health", healthRoute);
app.use("/api/v1", v1Routes);

app.get("/", (_, res) => {
  res.redirect("/api/health");
});

app.use(errorHandler);

export { app };
