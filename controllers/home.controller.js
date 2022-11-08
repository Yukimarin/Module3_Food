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
    // console.log(restaurantsData);
    let restaurantnewData = restaurantsData.reduce((pre, cur) => {
      if (!pre[cur.category]) {
        pre[cur.category] = [];
      }
      pre[cur.category].push(cur);
      return pre;
    }, {});
    console.log(restaurantnewData);
    let categoryList = Object.keys(restaurantnewData);
    let resByCategory = Object.values(restaurantnewData);
    res.render("home", {
      restaurantList: resByCategory,
      categoryList,
    });
  } catch (error) {
    res.send("something went really wrong");
    next();
  }
};
