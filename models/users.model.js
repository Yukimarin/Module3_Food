import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
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
  image: {
    type: String,
  },
});

export default mongoose.model("users", userSchema);
