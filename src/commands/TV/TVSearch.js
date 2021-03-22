// eslint-disable-next-line no-unused-vars
const { Command, CommandContext } = require("commands.wolf.js");
const { Client } = require("../../TMDB");
const { help } = require("../../helper");

const Translation = [
  {
    key: "TVSHOW_SEARCH",
    translations: {
      "en-US": "!tv search",
      "ar-SA": "!مسلسل بحث",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const tvshowSearch = async (bot, context) => {
  await Client.search
    .tv({
      language: context.Language,
      query: context.Rest,
    })
    .then(async (tvshows) => {
      try {
        await context.ReplyImage(
          await help.TV.Image(tvshows.results[0]),
          "image/jpeg"
        );
        await context.Reply(help.TV.Info(context.Language, tvshows.results[0]));
      } catch (error) {
        await context.Reply("We can not find this tvshow");
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
  new Command("TVSHOW_SEARCH", {
    method: (null, tvshowSearch),
  }),
];

module.exports = {
  Commands,
  Translation,
};
