// eslint-disable-next-line no-unused-vars
const { Command, CommandContext } = require("commands.wolf.js");
const { Client } = require("../../TMDB");
const { help } = require("../../helper");

const Translation = [
  {
    key: "MOVIE_SEARCH",
    translations: {
      "en-US": "!movie search",
      "ar-SA": "!فلم بحث",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const movieSearch = async (bot, context) => {
  await Client.search
    .movies({
      language: context.Language,
      query: context.Rest,
    })
    .then(async (movies) => {
      try {
        await context.ReplyImage(
          await help.Movie.Image(movies.results[0]),
          "image/jpeg"
        );
        await context.Reply(
          help.Movie.Info(context.Language, movies.results[0])
        );
      } catch (error) {
        await context.Reply("We can not find this movie");
      }
    })
    .catch((error) => {
      context.Reply(error);
    });
};

/**
 *
 */
const Commands = [
  new Command("MOVIE_SEARCH", {
    method: (null, movieSearch),
  }),
];

module.exports = {
  Commands,
  Translation,
};
