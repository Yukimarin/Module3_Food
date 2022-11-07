import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.routes.js";
import foodRouter from "./routes/food.routes.js";
import restaurantRouter from "./routes/restaurant.routes.js";
import authRouter from "./routes/auth.routes.js";
import homeRouter from "./routes/home.routes.js";
import adminRouter from "./routes/admin.routes.js";
import cookieParser from "cookie-parser";
import authorize from "./middlewares/authorize.js";

const port = 3000;
const app = express();

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
app.use("/food", foodRouter);
app.use("/restaurant", restaurantRouter);
app.use("/auth", authRouter);
app.use("/", homeRouter);
app.use("/admin", authorize("admin"), adminRouter);

app.get("/purchase-history", (req, res) => {
  res.render("purchase-history");
});

app.listen(port, () => {
  connectMongoose();
  console.log("hello world");
});
