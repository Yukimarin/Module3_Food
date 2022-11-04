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

export const create = async ({
    street: "100 Maple Street",
    city: "Fort Townville,
    state: "New West Virgota",
    zip: "77777"
    owner: {name: "Alex Merced"}
})