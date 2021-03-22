// eslint-disable-next-line no-unused-vars
const { Command, CommandContext } = require("commands.wolf.js");
const { Client } = require("../../TMDB");
const { help } = require("../../helper");

const Translation = [
  {
    key: "MOVIE",
    translations: {
      "en-US": "!movie",
      "ar-SA": "!فلم",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const Movie = async (bot, context) => {
  await Client.discover
    .movie({
      language: context.Language,
      sort_by: help.MovieDiscover.randomSortBy(),
      page: Math.floor(Math.random() * 10 + 1),
    })
    .then(async (movies) => {
      try {
        const movie = help.Utility.random(movies.results);
        await context.ReplyImage(await help.Movie.Image(movie), "image/jpeg");
        await context.Reply(help.Movie.Info(context.Language, movie));
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
  new Command("MOVIE", {
    method: (null, Movie),
  }),
];

module.exports = {
  Commands,
  Translation,
};
