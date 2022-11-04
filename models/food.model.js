import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    foodname: {
      type: String,
    },
    point: {
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
    status: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("food", foodSchema);
