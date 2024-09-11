const mongoose = require("mongoose");

const journalSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 100,
    },
    category: {
      type: String,
      required: true,
      maxLength: 50,
    },
    image: {
      type: String,
      required: true,
      maxLength: 100,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
    body: {
      type: String,
      required: true,
      maxLength: 10000,
    },
  },
  {
    timestamps: true,
  }
);

let JournalModel =
  mongoose.model?.Journal || mongoose.model("Journal", journalSchema);

module.exports = JournalModel;
