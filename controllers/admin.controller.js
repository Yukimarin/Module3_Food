import mongoose from "mongoose";
import User from "../models/users.model.js";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
  },
});
const FoodSchema = new Schema({
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
const food = mongoose.model("Food", FoodSchema);
const restaurant = mongoose.model("Restaurant", FoodSchema);

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
    let foods = await food.find({});
    let foodsData = foods.map((food) => food.toObject());
    let restaurants = await restaurant.find({});
    let restaurantsData = restaurants.map((restaurant) =>
      restaurant.toObject()
    );

    res.render("admin", {
      userList: usersData,
      foodList: foodsData,
      restaurantList: restaurantsData,
    });
  } catch (error) {
    res.send("something went really wrong");
    next();
  }
};
