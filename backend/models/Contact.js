const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 50,
    },
    phone: {
      type: String,
      required: true,
      maxLength: 13,
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
    },
    body: {
      type: String,
      required: true,
      maxLength: 2000,
    },
  },
  {
    timestamps: true,
  }
);

let ContactModel =
  mongoose.model?.Contact || mongoose.model("Contact", contactSchema);

module.exports = ContactModel;
