const express = require("express");
const NewsletterModel = require("./../models/Newsletter");

const newsletterRouter = express.Router();

// **GET
newsletterRouter.get("/", async (req, res) => {
  try {
    const newsletters = await NewsletterModel.find({});
    return res.status(200).json({ newsletters });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Member
newsletterRouter.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    await NewsletterModel.create({ email });
    return res.status(201).json({ message: "new member added successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = newsletterRouter;
