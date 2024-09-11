const express = require("express");
const JournalModel = require("./../models/Journal");

const journalRouter = express.Router();

// **GET
journalRouter.get("/", async (req, res) => {
  try {
    const journals = await JournalModel.find({});
    return res.status(200).json({ journals });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **GET Main Journal
journalRouter.get("/:journalID", async (req, res) => {
  try {
    let journalID = req.params.journalID;
    const mainJournal = await JournalModel.findOne({ _id: journalID });
    return res.status(200).json({ mainJournal });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Journal
journalRouter.post("/", async (req, res) => {
  try {
    let newJournal = {
      title: req.body.title,
      category: req.body.category,
      image: req.body.image,
      isVisible: req.body.isVisible,
      body: req.body.body,
    };
    await JournalModel.create(newJournal);
    return res
      .status(201)
      .json({ message: "new journal created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = journalRouter;
