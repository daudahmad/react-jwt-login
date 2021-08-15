const express = require("express");
const { getRoutes } = require("./routes/index");

const startServer = ({ port = 4000 } = {}) => {
  const app = express();
  app.use(express.json());

  // mount the entire app to the /api route
  app.use("/api", getRoutes());

  // add the generic error handler just in case errors are missed by middleware
  app.use(errorMiddleware);

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

const errorMiddleware = (error, req, res, next) => {
  console.log("error");
  if (res.headersSent) {
    next(error);
  } else {
    console.error(error);

    res.status(500);
    res.json({
      message: error.message,
    });
  }
};

module.exports = { startServer };
