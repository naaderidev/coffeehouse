const mongoose = require("mongoose");

const journalCategorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50,
    },
    titlePersian: {
      type: String,
      required: true,
      maxLength: 50,
    },
    image: {
      type: String,
      required: true,
      maxLength: 100,
    },
  },
  {
    timestamps: true,
  }
);

let JournalCategoryModel =
  mongoose.model?.JournalCategory ||
  mongoose.model("JournalCategory", journalCategorySchema);

module.exports = JournalCategoryModel;
