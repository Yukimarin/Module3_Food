import mongoose from "mongoose";
import usersModel from "../models/users.model.js";
import User from "../models/users.model.js";
import bcrypt from "bcryptjs";
// const Schema = mongoose.Schema;
// const UserSchema = new Schema({
//   name: {
//     type: String,
//   },
// });
// const user = mongoose.model("User", UserSchema);

export const update = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (user) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        user.id,
        {
          $set: {
            ...req.body,
            password: bcrypt.hashSync(
              req.body.password,
              bcrypt.genSaltSync(10)
            ),
          },
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(403, { message: "You can update account!" });
  }
};
export const show = async (req, res, next) => {
  // user.find({}, (err, users) => {
  //   if (err) {
  //     res.send("something went really wrong");
  //     next();
  //   } else {
  //     let usersData = users.map((user) => user.toObject());
  //     res.render("users", {
  //       userList: usersData,
  //     });
  //   }
  // });
};
