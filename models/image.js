const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    imgId: {
      type: String,
      required: [true, "Every image object must contain imgId"],
    },
    tags: {
      type: [String],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Every image object must contain category"],
    },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
