import express from "express";
const port = 3000;
const app = express();

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectMongoose = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connect to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.listen(port, () => {
  connectMongoose();
  console.log("hello world");
});
