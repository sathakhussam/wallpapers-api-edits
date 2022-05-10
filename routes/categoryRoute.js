const express = require("express");
const router = express.Router();

// Controllers
const categoryController = require("../controllers/categoryController");

router.route("/").get(categoryController.getAllCategories);

router.route("/:id").get(categoryController.getCategory);

module.exports = router;
