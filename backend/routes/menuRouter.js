const express = require("express");
const MenuModel = require("./../models/Menu");

const menuRouter = express.Router();

// **GET
menuRouter.get("/", async (req, res) => {
  try {
    const menu = await MenuModel.find({});
    return res.status(200).json({ menu });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Item to Menu
menuRouter.post("/", async (req, res) => {
  try {
    let newItem = {
      title: req.body.title,
      category: req.body.category,
      price: req.body.price,
      ingredient: req.body.ingredient,
      image: req.body.image,
      firstTag: req.body.firstTag,
      secondTag: req.body.secondTag,
    };
    await MenuModel.create(newItem);
    return res
      .status(201)
      .json({ message: "New Item inserted to Menu Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = menuRouter;
