const { random } = require("../Utilities");

const SortBy = [
  "popularity.desc",
  "revenue.desc",
  "vote_average.desc",
  "vote_count.desc",
];
const randomSortBy = () => random(SortBy);

module.exports = {
  randomSortBy,
};
