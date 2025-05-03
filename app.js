const config = require("./config/setting-dev");
const indexRoutes = require("./routes/index");
const express = require("express");
const db = require("./utils/db");
const DBConnections = require("./utils/db");
const mongoose = require("mongoose")

const app = express();



(async () => {
  try {
    // Connect to DB
    await DBConnections();

    app.use(express.json())

    // Home routes
    app.use("/api/v1", indexRoutes);

    // Start server
    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1); // Exit the process with failure
  }
})();


