const express = require("express");
const ReserveModel = require("./../models/Reserve");

const reserveRouter = express.Router();

// **GET
reserveRouter.get("/", async (req, res) => {
  try {
    const reserves = await ReserveModel.find({});
    return res.status(200).json({ reserves });
  } catch (error) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
});

// **POST New Reserve
reserveRouter.post("/", async (req, res) => {
  try {
    const { name, phone, dateDay, dateMonth, dateYear } = req.body;
    let newReserve = {
      name,
      phone,
      dateDay,
      dateMonth,
      dateYear,
    };
    await ReserveModel.create(newReserve);
    return res
      .status(201)
      .json({ message: "new reserve created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
});

module.exports = reserveRouter;
