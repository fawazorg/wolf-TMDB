const TV = require("./TV");
const TVFind = require("./TVFind");
const TVGenre = require("./TVGenre");
const TVGenres = require("./TVGenres");
const TVSearch = require("./TVSearch");
const TVPopular = require("./TVPopular");
const TVHelp = require("./TVHelp");

const TVShowCommands = [
  ...TV.Commands,
  ...TVFind.Commands,
  ...TVGenre.Commands,
  ...TVGenres.Commands,
  ...TVSearch.Commands,
  ...TVPopular.Commands,
  ...TVHelp.Commands,
];

const TVShowTranslation = [
  ...TV.Translation,
  ...TVFind.Translation,
  ...TVGenre.Translation,
  ...TVGenres.Translation,
  ...TVSearch.Translation,
  ...TVPopular.Translation,
  ...TVHelp.Translation,
];

module.exports = {
  TVShowCommands,
  TVShowTranslation,
};
