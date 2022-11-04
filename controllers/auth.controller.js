import mongoose from "mongoose";
import User from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(404, "User not found!");
    if (user.status === 0) return res.status(500).send("deo cho dang nhap day");
    const isCorrect = bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(400, "Wrong Credentials!");

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT);

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send("dang nhap thanh cong");
  } catch (err) {
    next(err);
  }
};

export const signout = async (req, res, next) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};
