const mongoose = require("mongoose");

const reserveSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    phone: {
      type: String,
      required: true,
      maxLength: 13,
    },
    dateDay: {
      type: String,
      required: true,
      maxLength: 20,
    },
    dateMonth: {
      type: String,
      required: true,
      maxLength: 20,
    },
    dateYear: {
      type: String,
      required: true,
      maxLength: 20,
    },
  },
  {
    timestamps: true,
  }
);

let ReserveModel = mongoose.models?.Reserve || mongoose.model("Reserve", reserveSchema);
module.exports = ReserveModel;
