const express = require("express");
const ContactModel = require("./../models/Contact");

const contactRouter = express.Router();

// **GET
contactRouter.get("/", async (req, res) => {
  try {
    const contact = await ContactModel.find({});
    return res.status(200).json({ contact });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Message
contactRouter.post("/", async (req, res) => {
  try {
    let newMessage = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      body: req.body.body,
    };
    await ContactModel.create(newMessage);
    return res
      .status(201)
      .json({ message: "new message created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = contactRouter;
