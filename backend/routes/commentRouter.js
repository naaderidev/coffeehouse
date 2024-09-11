const express = require("express");
const CommentModel = require("./../models/Comment");

const commentRouter = express.Router();

// **GET Main Product Comments
commentRouter.get("/:productID", async (req, res) => {
  try {
    let productID = req.params.productID;
    const productComments = await CommentModel.find({ productId: productID });
    return res.status(200).json({ productComments });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// **POST New Comment
commentRouter.post("/", async (req, res) => {
  try {
    let newComment = {
      body: req.body.body,
      username: req.body.username,
      productId: req.body.productId,
    };
    await CommentModel.create(newComment);
    return res
      .status(201)
      .json({ message: "New comment created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = commentRouter;
