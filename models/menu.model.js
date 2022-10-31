import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  foodname: {
    type: String,
    require: true,
    unique: true,
  },
  decription: {
    type: String,
    require: true,
    unique: true,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    require: true,
    unique: true,
  },
  restaurant: {
    type: String,
    require: true,
    unique: true,
  },
});

export default mongoose.model("menu", menuSchema);
