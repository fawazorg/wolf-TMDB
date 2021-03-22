// eslint-disable-next-line no-unused-vars
const { Command, CommandContext } = require("commands.wolf.js");
const { Client } = require("../../TMDB");
const { help } = require("../../helper");

const Translation = [
  {
    key: "TVSHOW_FIND",
    translations: {
      "en-US": "!tv find",
      "ar-SA": "!مسلسل رقم",
    },
  },
];

/**
 * @param {Client} bot
 * @param {CommandContext} context
 */
const tvshowFind = async (bot, context) => {
  await Client.tv
    .details(context.Rest, { language: context.Language })
    .then(async (tvshow) => {
      await context.ReplyImage(await help.TV.Image(tvshow), "image/jpeg");
      await context.Reply(help.TV.Details(context.Language, tvshow));
    })
    .catch((error) => {
      context.Reply(error);
    });
};

/**
 *
 */
const Commands = [
  new Command("TVSHOW_FIND", {
    method: (null, tvshowFind),
  }),
];

module.exports = {
  Commands,
  Translation,
};
