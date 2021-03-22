// eslint-disable-next-line no-unused-vars
const { Command, CommandContext, GroupFilter } = require("commands.wolf.js");
const { help } = require("../../helper");

const Translation = [
  {
    key: "TVSHOW_HELP",
    translations: {
      "en-US": "!tv help",
      "ar-SA": "!مسلسل مساعدة",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const tvshowHelp = async (bot, context) => {
  await context.Reply(help.TVHelp.help[context.Language]);
};

/**
 *
 */
const Commands = [
  new Command("TVSHOW_HELP", {
    method: (null, tvshowHelp),
    filters: [new GroupFilter()],
  }),
];

module.exports = {
  Commands,
  Translation,
};
