const contentful = require("contentful");
// import dotenv from "dotenv";
// dotenv.config();

const client = contentful.createClient({
  space: process.env.SPACE,
  accessToken: process.env.ACCESS_TOKEN,
  host: process.env.HOST,
});

module.exports = { client };
