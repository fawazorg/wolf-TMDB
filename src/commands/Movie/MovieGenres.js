// eslint-disable-next-line no-unused-vars
const { Command, CommandContext, GroupFilter } = require("commands.wolf.js");
const { help } = require("../../helper");

const Translation = [
  {
    key: "MOVIE_GENRES",
    translations: {
      "en-US": "!movie genres",
      "ar-SA": "!فلم تصنيفات",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const movieGenres = async (bot, context) => {
  await context.Reply(help.MovieGenre.formatGenres(context.Language));
};

/**
 *
 */
const Commands = [
  new Command("MOVIE_GENRES", {
    method: (null, movieGenres),
    filters: [new GroupFilter()],
  }),
];

module.exports = {
  Commands,
  Translation,
};
