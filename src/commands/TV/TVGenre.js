// eslint-disable-next-line no-unused-vars
const { Command, CommandContext } = require("commands.wolf.js");
const { Client } = require("../../TMDB");
const { help } = require("../../helper");

const Translation = [
  {
    key: "TVSHOW_DISCOVER",
    translations: {
      "en-US": "!tv genre",
      "ar-SA": "!مسلسل تصنيف",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const tvshowDiscover = async (bot, context) => {
  await Client.discover
    .tvShows({
      language: context.Language,
      sort_by: help.TVDiscover.randomSortBy(),
      page: Math.floor(Math.random() * 10 + 1),
      with_genres: help.TVGener.getIdByName(context.Language, context.Rest),
    })
    .then(async (tvshows) => {
      try {
        const tvshow = help.Utility.random(tvshows.results);
        await context.ReplyImage(await help.TV.Image(tvshow), "image/jpeg");
        await context.Reply(help.TV.Info(context.Language, tvshow));
      } catch (error) {
        await context.Reply("We can not find this tv show");
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
  new Command("TVSHOW_DISCOVER", {
    method: (null, tvshowDiscover),
  }),
];

module.exports = {
  Commands,
  Translation,
};
