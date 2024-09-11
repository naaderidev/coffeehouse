const express = require("express");
const UserModel = require("./../models/User");

const usersRouter = express.Router();

// **GET
usersRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
});

module.exports = usersRouter;
