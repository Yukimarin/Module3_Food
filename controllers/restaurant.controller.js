import mongoose from "mongoose";
import Restaurant from "../models/restaurant.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const cretaeRestaurant = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newRestaurant = new Restaurant({ ...req.body, password: hash });

    await newRestaurant.save();
    res.status(200).send("restaurant has been created!");
  } catch (err) {
    next(err);
  }
};

export const loginRestaurant = async (req, res, next) => {
  try {
    // console.log(req.body);
    const restaurant = await Restaurant.findOne({ email: req.body.email });
    if (!restaurant) return next(404, "restaurant not found!");
    if (restaurant.status === 0) return next(500);
    const isCorrect = await bcrypt.compare(
      req.body.password,
      restaurant.password
    );
    if (!isCorrect) return next(400, "Wrong Credentials!");

    const token = jwt.sign({ id: restaurant._id }, process.env.JWT);
    const { password, ...others } = restaurant._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ code: 0 });
  } catch (err) {
    next(err);
  }
};
