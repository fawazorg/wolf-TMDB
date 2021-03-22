const { MovieCommands, MovieTranslation } = require("./Movie");
const { TVShowCommands, TVShowTranslation } = require("./TV");

const Commands = [...MovieCommands, ...TVShowCommands];

const Translation = [...MovieTranslation, ...TVShowTranslation];

module.exports = {
  Commands,
  Translation,
};
