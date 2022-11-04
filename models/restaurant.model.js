import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    phone: {
      type: Number,
      require: true,
      unique: true,
    },
    nameRestaurant: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    address: {
      type: String,
      require: true,
      unique: true,
    },
    wallet: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
    status: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("restaurant", restaurantSchema);
