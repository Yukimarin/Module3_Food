import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    phone: {
      type: Number,
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
    },
    wallet: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      require: true,
    },
    status: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
