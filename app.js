import express from "express";
const port = 3000;
const app = express();
import ejs from "ejs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.routes.js";
import menuRouter from "./routes/menu.routes.js";
import restaurantRouter from "./routes/restaurant.routes.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

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

app.set("view engine", "ejs");
app.set("views", `./views`);

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use("/users", userRouter);
app.use("/menu", menuRouter);
app.use("/restaurant", restaurantRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  connectMongoose();
  console.log("hello world");
});
