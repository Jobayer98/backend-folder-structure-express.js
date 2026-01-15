import { Server } from "http";

export const gracefulShutdown = async (signal: string, server: Server) => {
  console.info(`${signal} received, shutting down gracefully...`);

  // Stop accepting new connections
  server.close(async () => {
    console.info("HTTP server closed");

    // Disconnect from database;

    console.info("Server shutdown complete");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Forced shutdown after timeout");
    process.exit(1);
  }, 30000);
};
