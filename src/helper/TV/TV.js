/*
 * TV Show details:
 * {Array} genres
 * {Numper} id
 * {String} original_name
 * {String} overview
 * {String} poster_path
 * {String} first_air_date
 * {String} status
 * {String} tagline
 * {String} name
 * {Number} vote_average
 * {Array} seasons
 */

const { random, imageURL, imageBuffer } = require("../Utilities");
const { printGenres } = require("./Genre");

/**
 * Get all Tv show Details.
 * @param {Object} tvshow
 * @returns {String}
 */
const Details = (lan, tvshow) => `🎬 ${tvshow.original_name} (${tvshow.id})

${tvshow.tagline}

📅 ${tvshow.first_air_date.split("-")[0]} - ⭐(${tvshow.vote_average}/10)

${printGenres(lan, tvshow.genres)}

${tvshow.overview}`;

/**
 * Get all TV show info.
 * @param {Object} tvshow
 * @returns {String}
 */
const Info = (lan, tvshow) => `🎬 ${tvshow.original_name} (${tvshow.id})

📅 ${tvshow.first_air_date.split("-")[0]}  - ⭐(${tvshow.vote_average}/10)

${printGenres(lan, tvshow.genre_ids)}

${tvshow.overview}`;

/**
 * Get all Tv show Details.
 * @param {Array} Tvshows
 * @param {Number} length
 * @returns {String}
 */
const Lists = (Tvshows, length = 10) => {
  let results = "\n";
  // eslint-disable-next-line consistent-return
  Tvshows.slice(0, length).forEach((tvshow, index, array) => {
    if (index === array.length - 1) {
      results += `${index + 1}. ${tvshow.original_name} (${tvshow.id})`;
      return results;
    }
    results += `${index + 1}. ${tvshow.original_name} (${tvshow.id})\n`;
  });
  return results;
};

/**
 * Get random tv show details
 * @param {Array} Tvshows
 * @returns {String}
 */
const Random = (lan, Tvshows) => Details(lan, random(Tvshows));

/**
 * Get image as buffer data
 * @param {Object} tvshow
 * @returns {Data}
 */
const Image = async (tvshow) =>
  // eslint-disable-next-line no-return-await
  await imageBuffer(imageURL(tvshow.poster_path));

module.exports = {
  Details,
  Lists,
  Random,
  Image,
  Info,
};
