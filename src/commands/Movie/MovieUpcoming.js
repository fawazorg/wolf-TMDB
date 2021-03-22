// eslint-disable-next-line no-unused-vars
const { Command, CommandContext, GroupFilter } = require("commands.wolf.js");
const { Client } = require("../../TMDB");
const { help } = require("../../helper");

const Translation = [
  {
    key: "MOVIE_UPCOMING",
    translations: {
      "en-US": "!movie upcoming",
      "ar-SA": "!فلم قادم",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const movieUpcoming = async (bot, context) => {
  await Client.movie
    .upcoming()
    .then((movies) => {
      context.Reply(help.Movie.Lists(movies.results, 10));
    })
    .catch((error) => {
      context.Reply(error);
    });
};

/**
 *
 */
const Commands = [
  new Command("MOVIE_UPCOMING", {
    method: (null, movieUpcoming),
    filters: [new GroupFilter()],
  }),
];

module.exports = {
  Commands,
  Translation,
};
