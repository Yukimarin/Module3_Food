import mongoose from "mongoose";
import Food from "../models/food.model.js";

export const createFood = async (req, res, next) => {
  try {
    const food = await Food.create(req.body);
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

// export const create = async ( req, res, next ) => {
//     try {
//     const Food = aw
//     }catch (err) {
//         next(err)
//     }

// }
