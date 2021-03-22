// eslint-disable-next-line no-unused-vars
const { Command, CommandContext, GroupFilter } = require("commands.wolf.js");
const { Client } = require("../../TMDB");
const { help } = require("../../helper");

const Translation = [
  {
    key: "TVSHOW_POPULAR",
    translations: {
      "en-US": "!tv popular",
      "ar-SA": "!مسلسل شائع",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const tvshowPopular = async (bot, context) => {
  await Client.tv
    .popular()
    .then((tvshows) => {
      context.Reply(help.TV.Lists(tvshows.results, 10));
    })
    .catch((error) => {
      context.Reply(error);
    });
};

/**
 *
 */
const Commands = [
  new Command("TVSHOW_POPULAR", {
    method: (null, tvshowPopular),
    filters: [new GroupFilter()],
  }),
];

module.exports = {
  Commands,
  Translation,
};
