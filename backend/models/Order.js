const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    basket: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel =
  mongoose.models?.Order || mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
