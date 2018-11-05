// Import Dependencies
import mongoose from "mongoose";
import color from "colors";

// Import Environment Variables
require("dotenv").config();

// Setup Database Connection
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true },
  () => {
    console.log(
      color.magenta(`==> A database connection has been established`)
    );
  }
);
mongoose.set("useCreateIndex", "true");
