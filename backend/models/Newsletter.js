const mongoose = require("mongoose");

const newsletterSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      maxLength: 100,
    },
  },
  {
    timestamps: true,
  }
);

let NewsletterModel =
  mongoose.model?.Newsletter || mongoose.model("Newsletter", newsletterSchema);

module.exports = NewsletterModel;
