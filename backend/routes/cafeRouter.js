const express = require("express");
const CafeCategoryModel = require("./../models/CafeCategory");

const cafeRouter = express.Router();

// **GET
cafeRouter.get("/", async (req, res) => {
  try {
    const cafeCategories = await CafeCategoryModel.find({});
    return res.status(200).json({ cafeCategories });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Category
cafeRouter.post("/", async (req, res) => {
  try {
    let newCategory = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      image: req.body.image,
      icon: req.body.icon,
    };
    await CafeCategoryModel.create(newCategory);
    return res
      .status(200)
      .json({ message: "New category created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = cafeRouter;
