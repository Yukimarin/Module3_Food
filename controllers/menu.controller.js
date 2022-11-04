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
