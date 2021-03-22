// eslint-disable-next-line no-unused-vars
const { Command, CommandContext, GroupFilter } = require("commands.wolf.js");
const { help } = require("../../helper");

const Translation = [
  {
    key: "MOVIE_HELP",
    translations: {
      "en-US": "!movie help",
      "ar-SA": "!فلم مساعدة",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const movieGenres = async (bot, context) => {
  await context.Reply(help.Moviehelp.help[context.Language]);
};

/**
 *
 */
const Commands = [
  new Command("MOVIE_HELP", {
    method: (null, movieGenres),
    filters: [new GroupFilter()],
  }),
];

module.exports = {
  Commands,
  Translation,
};
