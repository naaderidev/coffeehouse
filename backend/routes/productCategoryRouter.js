const express = require("express");
const ProductCategory = require("./../models/ProductCategory");

const productCategoryRouter = express.Router();

// **GET
productCategoryRouter.get("/", async (req, res) => {
  try {
    const productCategories = await ProductCategory.find({});
    return res.status(200).json({ productCategories });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Item
productCategoryRouter.post("/", async (req, res) => {
  try {
    const { title, titlePersian, image } = req.body;
    let newCategory = {
      title,
      titlePersian,
      image,
    };
    await ProductCategory.create(newCategory);
    return res
      .status(201)
      .json({ message: "new product category created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = productCategoryRouter;
