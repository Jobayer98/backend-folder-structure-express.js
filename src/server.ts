import { Server } from "http";
import { app } from "./app";
import { gracefulShutdown } from "./core/utils/graceful-shutdown";

const port = parseInt(process.env.PORT || "3000", 10);

const server: Server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.info("Server startup complete, entering event loop...");
});

process.on("SIGTERM", () => gracefulShutdown("SIGTERM", server));
process.on("SIGINT", () => gracefulShutdown("SIGINT", server));

process.on("exit", (code) => {
  console.info(`Process exiting with code: ${code}`);
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  gracefulShutdown("uncaughtException", server);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", { promise, reason });
  gracefulShutdown("unhandledRejection", server);
});
