const express = require("express");
const BrandModel = require("./../models/Brand");

const brandRouter = express.Router();

// **GET
brandRouter.get("/", async (req, res) => {
  try {
    const brands = await BrandModel.find({});
    return res.status(200).json({ brands });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Brand
brandRouter.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    await BrandModel.create({ title });
    return res.status(201).json({ message: "New brand created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = brandRouter;
