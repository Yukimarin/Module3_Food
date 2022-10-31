import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  phone: {
    type: Number,
    require: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
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
    unique: true,
  },
  restaurant: {
    type: String,
    require: true,
    unique: true,
  },
});

export default mongoose.model("restaurant", restaurantSchema);
