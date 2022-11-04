import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      require: true,
      unique: true,
    },
    nameRestaurant: {
      type: String,
      require: true,
      unique: true,
    },
    category: {
      type: Number,
    },
    foodname: {
      type: String,
    },
    price: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("menu", menuSchema);
