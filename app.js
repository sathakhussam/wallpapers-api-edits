// Getting our packages that are necessary
const express = require("express");
const mongoose = require("mongoose");
var morgan = require("morgan");

// Imports for the routing and errorHandling
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const imageRouter = require("./routes/imageRoute");
const categoryRouter = require("./routes/categoryRoute");

// Initializing our app and setting up logging
const app = express();
app.use(morgan("dev"));

// Middlewares
app.use(express.json());
// Routers for routing the urls inside app

app.use("/api/v1/categories/", categoryRouter);
app.use("/api/v1/images/", imageRouter);

// 404 Middleware
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `can't find the ${req.originalUrl} on the server`,
      404,
      "E0001"
    )
  );
});

// Error Middleware
app.use(globalErrorHandler);

module.exports = app;
