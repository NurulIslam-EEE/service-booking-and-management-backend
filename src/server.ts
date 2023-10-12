import mongoose from "mongoose";
import app from "./app";

import { Server } from "http";
import config from "./config";

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    // console.log("connected db");

    server = app.listen(config.port, () => {
      console.log(`university listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("failed");
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on("SIGTERM", () => {
  console.log("SIGTERM is received");

  if (server) {
    server.close();
  }
});
