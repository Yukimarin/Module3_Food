import mongoose from "mongoose";
import Food from "../models/food.model.js";
import Restaurant from "../models/restaurant.model.js";

export const createFood = async (req, res, next) => {
  try {
    const food = await Food.create(req.body);
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.body.restaurant,
      { $push: { foods: food.id } },
      { new: true, useFindAndModify: false }
    );

    res.status(200).send("Food has been created");
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  const food = await Food.findById(req.params.id);
  console.log(food);
  if (food) {
    try {
      const updatefood = await Food.findByIdAndUpdate(
        food.id,
        {
          $set: {
            ...req.body,
          },
        },
        { new: true }
      );
      res.status(200).json(updatefood);
    } catch (err) {
      next(err);
    }
  } else {
    return next(403, { message: "You can update account!" });
  }
};

export const del = async (req, res, next) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return next(404, " food not found");
    if (req.user.id === food.user.id) {
      await Food.findByIdAndDelete(req.params.id);
      res.status(200).send("The food was deleted");
    }
  } catch (err) {
    next(err);
  }
};
// export const create = async ( req, res, next ) => {
//     try {
//     const Food = aw
//     }catch (err) {
//         next(err)
//     }

// }
