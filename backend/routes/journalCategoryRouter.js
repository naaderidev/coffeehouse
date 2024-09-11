const express = require("express");
const JournalCategory = require("./../models/JournalCategory");
const JournalCategoryModel = require("./../models/JournalCategory");

const journalCategoryRouter = express.Router();

// **GET
journalCategoryRouter.get("/", async (req, res) => {
  try {
    const journalCategories = await JournalCategory.find({});
    return res.status(200).json({ journalCategories });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Category
journalCategoryRouter.post("/", async (req, res) => {
  try {
    let newCategory = {
      title: req.body.title,
      titlePersian: req.body.titlePersian,
      image: req.body.image,
    };
    await JournalCategoryModel.create(newCategory);
    return res
      .status(201)
      .json({ message: "new category created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = journalCategoryRouter;
