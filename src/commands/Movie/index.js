const MoviePopular = require("./MoviePopular");
const MovieUpComing = require("./MovieUpcoming");
const MovieFind = require("./MovieFind");
const MovieSearch = require("./MovieSearch");
const MovieGenres = require("./MovieGenres");
const MovieGenre = require("./MovieGenre");
const MovieHelp = require("./MovieHelp");
const Movie = require("./Movie");

const MovieCommands = [
  ...MoviePopular.Commands,
  ...MovieUpComing.Commands,
  ...MovieFind.Commands,
  ...MovieSearch.Commands,
  ...MovieGenres.Commands,
  ...MovieGenre.Commands,
  ...MovieHelp.Commands,
  ...Movie.Commands,
];

const MovieTranslation = [
  ...MoviePopular.Translation,
  ...MovieUpComing.Translation,
  ...MovieFind.Translation,
  ...MovieSearch.Translation,
  ...MovieGenres.Translation,
  ...MovieGenre.Translation,
  ...MovieHelp.Translation,
  ...Movie.Translation,
];

module.exports = {
  MovieCommands,
  MovieTranslation,
};
