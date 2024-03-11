import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connnectDB } from "./db/connectDB.js";

dotenv.config();
connnectDB();

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
