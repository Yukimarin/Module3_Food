import mongoose from "mongoose";
import User from "../models/users.model.js";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
  },
});
const MenuSchema = new Schema({
  name: {
    type: String,
  },
});
const RestaurantSchema = new Schema({
  name: {
    type: String,
  },
});
const user = mongoose.model("User", UserSchema);
const menu = mongoose.model("Menu", MenuSchema);
const restaurant = mongoose.model("Restaurant", MenuSchema);

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
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
  try {
    let users = await user.find({});
    let usersData = users.map((user) => user.toObject());
    let menus = await menu.find({});
    let menusData = menus.map((menu) => menu.toObject());
    let restaurants = await restaurant.find({});
    let restaurantsData = restaurants.map((restaurant) =>
      restaurant.toObject()
    );

    res.render("admin", {
      userList: usersData,
      menuList: menusData,
      restaurantList: restaurantsData,
    });
  } catch (error) {
    res.send("something went really wrong");
    next();
  }
};
