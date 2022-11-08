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
    res.status(200).send({ message: "User has been created!" });
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(404, "User not found!");
    if (user.status === 0)
      return res
        .status(500)
        .send({ message: "Đăng nhập thành công. Nhưng tài khoản bị khoá :))" });
    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(400, "Wrong Credentials!");

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT);

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send({ message: "Login successfully!" });
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res) => {
  try {
    res
      .cookie("access_token", "", {
        httpOnly: true,
      })
      .status(200)
      .send({ message: "Logout successfully!" });
  } catch (err) {
    this.next(err);
  }
};
