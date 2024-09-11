const express = require("express");
const MenuCategory = require("./../models/MenuCategory");

const menuCategoryRouter = express.Router();

// **GET
menuCategoryRouter.get("/", async (req, res) => {
  try {
    const menuCategory = await MenuCategory.find({});
    return res.status(200).json({ menuCategory });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Category
menuCategoryRouter.post("/", async (req, res) => {
  try {
    const { title, titlePersian, image } = req.body;
    let newCat = {
      title,
      titlePersian,
      image,
    };
    await MenuCategory.create(newCat);
    return res
      .status(201)
      .json({ message: "new category inserted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = menuCategoryRouter;
