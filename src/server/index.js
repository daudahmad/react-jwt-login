const { startServer } = require("./start");
const dotenv = require("dotenv");

dotenv.config();

startServer({ port: 4000 });
