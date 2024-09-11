const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      maxLength: 150,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxLength: 13,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    zip: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    role: {
      type: String,
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models?.User || mongoose.model("User", userSchema);
module.exports = UserModel;
