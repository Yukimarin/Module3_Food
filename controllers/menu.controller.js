import mongoose from "mongoose";
import Menu from "../models/menu.model.js";

export const createFood = async (req, res, next) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(200).send("Food has been created");
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  const menu = await Menu.findById(req.params.id);
  console.log(menu);
  if (menu) {
    try {
      const updatemenu = await Menu.findByIdAndUpdate(
        menu.id,
        {
          $set: {
            ...req.body,
          },
        },
        { new: true }
      );
      res.status(200).json(updatemenu);
    } catch (err) {
      next(err);
    }
  } else {
    return next(403, { message: "You can update account!" });
  }
};

// export const create = async ( req, res, next ) => {
//     try {
//     const Menu = aw
//     }catch (err) {
//         next(err)
//     }

// }
