import mongoose from "mongoose";
import { restaurant } from "./admin.controller.js";
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
  name: {
    type: String,
  },
});

export const show = async (req, res, next) => {
  try {
    let restaurants = await restaurant.find({});
    let restaurantsData = restaurants.map((restaurant) =>
      restaurant.toObject()
    );
    res.render("home", {
      restaurantList: restaurantsData,
    });
  } catch (error) {
    res.send("something went really wrong");
    next();
  }
};
