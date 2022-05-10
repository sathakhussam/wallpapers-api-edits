const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Image = require("../models/image");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllImages = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Image.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const images = await features.query;
  res.status(200).json({ status: "success", data: images });
});

exports.getImage = catchAsync(async (req, res, next) => {
  const image = await Image.findById(req.params.id);
  res.status(200).json({ status: "success", data: image });
});
