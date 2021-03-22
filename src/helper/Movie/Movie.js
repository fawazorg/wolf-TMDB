/*
 * Movie details:
 * {Array} genres
 * {Numper} id
 * {String} original_title
 * {String} overview
 * {String} poster_path
 * {String} release_date
 * {Numper} runtime
 * {String} tagline
 * {String} title
 * {Number} vote_average
 */

const { random, imageURL, imageBuffer } = require("../Utilities");
const { printGenres } = require("./Genre");

/**
 * Get all movie Details.
 * @param {Object} movie
 * @returns {String}
 */
const Details = (lan, movie) => `🎬 ${movie.original_title} (${movie.id})

${movie.tagline}

📅 ${movie.release_date.split("-")[0]} - ⏱${movie.runtime} - ⭐(${
  movie.vote_average
}/10)

${printGenres(lan, movie.genres)}

${movie.overview}`;

/**
 * Get all movie info.
 * @param {Object} movie
 * @returns {String}
 */
const Info = (lan, movie) => `🎬 ${movie.original_title} (${movie.id})

📅 ${movie.release_date.split("-")[0]}  - ⭐(${movie.vote_average}/10)

${printGenres(lan, movie.genre_ids)}

${movie.overview}`;

/**
 * Get all movie Details.
 * @param {Array} movies
 * @param {Number} length
 * @returns {String}
 */
const Lists = (movies, length = 10) => {
  let results = "\n";
  // eslint-disable-next-line consistent-return
  movies.slice(0, length).forEach((movie, index, array) => {
    if (index === array.length - 1) {
      results += `${index + 1}. ${movie.title} (${movie.id})`;
      return results;
    }
    results += `${index + 1}. ${movie.title} (${movie.id})\n`;
  });
  return results;
};

/**
 * Get random movie details
 * @param {Array} movies
 * @returns {String}
 */
const Random = (lan, movies) => Details(lan, random(movies));

/**
 * Get image as buffer data
 * @param {Object} movie
 * @returns {Data}
 */
const Image = async (movie) =>
  // eslint-disable-next-line no-return-await
  await imageBuffer(imageURL(movie.poster_path));

module.exports = {
  Details,
  Lists,
  Random,
  Image,
  Info,
};
