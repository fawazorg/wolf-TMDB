// eslint-disable-next-line no-unused-vars
const { Command, CommandContext } = require("commands.wolf.js");
const { Client } = require("../../TMDB");
const { help } = require("../../helper");

const Translation = [
  {
    key: "TV",
    translations: {
      "en-US": "!tv",
      "ar-SA": "!مسلسل",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const TV = async (bot, context) => {
  await Client.discover
    .tvShows({
      language: context.Language,
      sort_by: help.TVDiscover.randomSortBy(),
      page: Math.floor(Math.random() * 10 + 1),
    })
    .then(async (TvShows) => {
      try {
        const TvShow = help.Utility.random(TvShows.results);
        await context.ReplyImage(await help.TV.Image(TvShow), "image/jpeg");
        await context.Reply(help.TV.Info(context.Language, TvShow));
      } catch (error) {
        await context.Reply("We can not find this TV show.");
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
  new Command("TV", {
    method: (null, TV),
  }),
];

module.exports = {
  Commands,
  Translation,
};
