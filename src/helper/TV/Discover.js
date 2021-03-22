const { random } = require("../Utilities");

const SortBy = ["popularity.desc", "vote_average.desc", "first_air_date.desc"];
const randomSortBy = () => random(SortBy);

module.exports = {
  randomSortBy,
};
