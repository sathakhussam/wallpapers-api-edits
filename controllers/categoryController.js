const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Image = require("../models/image");
const Category = require("../models/category");

exports.getAllCategories = catchAsync(async (req, res, next) => {
  let categories = await Category.find();
  categories = await Promise.all(
    categories.map(async (element) => {
      const catg = { ...element["_doc"] };
      const images = await Image.find({ category: element["_id"] });
      catg["images"] = images;
      return catg;
    })
  );
  console.log(categories);
  res.status(200).json({ status: "success", data: categories });
});

exports.getCategory = catchAsync(async (req, res, next) => {
  let category = await Category.findById(req.params.id);
  if (!category)
    return new AppError(
      "There is no such category with the provided id",
      404,
      "E0001"
    );

  const images = await Image.find({ category: category.id });
  res
    .status(200)
    .json({ status: "success", data: { ...category["_doc"], images: images } });
});
