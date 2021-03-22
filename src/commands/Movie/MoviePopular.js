// eslint-disable-next-line no-unused-vars
const { Command, CommandContext, GroupFilter } = require("commands.wolf.js");
const { Client } = require("../../TMDB");
const { help } = require("../../helper");

const Translation = [
  {
    key: "MOVIE_POPULAR",
    translations: {
      "en-US": "!movie popular",
      "ar-SA": "!فلم شائع",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const moviePopular = async (bot, context) => {
  await Client.movie
    .popular()
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
  new Command("MOVIE_POPULAR", {
    method: (null, moviePopular),
    filters: [new GroupFilter()],
  }),
];

module.exports = {
  Commands,
  Translation,
};
