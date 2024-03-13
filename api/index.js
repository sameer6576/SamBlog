import express from "express";
import dotenv from "dotenv";
import { connnectDB } from "./db/connectDB.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
connnectDB();

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
