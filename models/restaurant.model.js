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
      require: true,
      type: Number,
    },
    opentime: {
      type: String,
    },
    closetime: {
      type: String,
    },

    foods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("restaurant", restaurantSchema);
