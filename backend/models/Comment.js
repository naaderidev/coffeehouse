const mongoose = require("mongoose");
require("./Product");
require("./User");

const commentSchema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
      maxLength: 2000,
    },
    username: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

let CommentModel =
  mongoose.model?.Comment || mongoose.model("Comment", commentSchema);

module.exports = CommentModel;
