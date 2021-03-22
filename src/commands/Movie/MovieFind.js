// eslint-disable-next-line no-unused-vars
const { Command, CommandContext } = require("commands.wolf.js");
const { Client } = require("../../TMDB");
const { help } = require("../../helper");

const Translation = [
  {
    key: "MOVIE_FIND",
    translations: {
      "en-US": "!movie find",
      "ar-SA": "!فلم رقم",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const movieFind = async (bot, context) => {
  await Client.movie
    .details(context.Rest, { language: context.Language })
    .then(async (movie) => {
      await context.ReplyImage(await help.Movie.Image(movie), "image/jpeg");
      await context.Reply(help.Movie.Details(context.Language, movie));
    })
    .catch((error) => {
      context.Reply(error);
    });
};

/**
 *
 */
const Commands = [
  new Command("MOVIE_FIND", {
    method: (null, movieFind),
  }),
];

module.exports = {
  Commands,
  Translation,
};
