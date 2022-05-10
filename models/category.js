const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required for category object"],
    },
    imageThumbnailId: {
      type: String,
      required: [true, "imageThumbnailId is required for category object"],
    },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
