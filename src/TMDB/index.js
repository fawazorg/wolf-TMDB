/* eslint-disable no-return-await */
const { v3 } = require("@leonardocabeza/the-movie-db");
require("dotenv").config();

const ApiKey = process.env.APIKEY;
const Client = v3(ApiKey);

module.exports = {
  Client,
};
