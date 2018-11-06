// Import Dependencies
import path from "path";
import express from "express";
import color from "colors";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// Import Package.json
import { name, version, description } from "./package.json";

// Import Config Variables
import { port } from "./config/config";

// Import Routes
import authRoutes from "./routes/Api/auth";

// Connect Database
import "./database/conn";

// Initialize Express App
const app = express();

// Use Middlewares
app.use(cookieParser());
app.use(helmet());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup Routes
app.get("/api", (req, res) => {
  res.status(200).json({
    name,
    version,
    description
  });
});

app.use("/api/auth", authRoutes);

// For Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

// Listening For Port
app.listen(port, () => {
  console.log(
    color.green(`==> The server is running on http://localhost:${port}`)
  );
});
