import express from "express";
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const ejs = require("ejs");
const port = 3000;
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// mongodb import
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
