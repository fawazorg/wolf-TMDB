// eslint-disable-next-line no-unused-vars
const { Command, CommandContext, GroupFilter } = require("commands.wolf.js");
const { help } = require("../../helper");

const Translation = [
  {
    key: "TVSHOW_GENRES",
    translations: {
      "en-US": "!tv genres",
      "ar-SA": "!مسلسل تصنيفات",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const tvshowGenres = async (bot, context) => {
  await context.Reply(help.TVGener.formatGenres(context.Language));
};

/**
 *
 */
const Commands = [
  new Command("TVSHOW_GENRES", {
    method: (null, tvshowGenres),
    filters: [new GroupFilter()],
  }),
];

module.exports = {
  Commands,
  Translation,
};
