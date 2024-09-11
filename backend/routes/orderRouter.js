const express = require("express");
const OrderModel = require("./../models/Order");

const orderRouter = express.Router();

// **GET
orderRouter.get("/", async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Order
orderRouter.post("/", async (req, res) => {
  try {
    const { userId, totalPrice, basket } = req.body;
    let newOrder = {
      userId,
      totalPrice,
      basket,
    };
    await OrderModel.create(newOrder);
    return res.status(201).json({ message: "new order inserted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = orderRouter;
