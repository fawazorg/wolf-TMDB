const Genres = [
  {
    id: 28,
    name: {
      "ar-SA": "ุงูุดู",
      "en-US": "Action",
    },
    emoji: "๐ฌ",
  },
  {
    id: 12,
    name: {
      "ar-SA": "ูุบุงูุฑุฉ",
      "en-US": "Adventure",
    },
    emoji: "๐",
  },
  {
    id: 16,
    name: {
      "ar-SA": "ุฑุณูู ูุชุญุฑูุฉ",
      "en-US": "Animation",
    },
    emoji: "๐ฎ",
  },
  {
    id: 35,
    name: {
      "ar-SA": "ููููุฏู",
      "en-US": "Comedy",
    },
    emoji: "๐",
  },
  {
    id: 80,
    name: {
      "ar-SA": "ุฌุฑููุฉ",
      "en-US": "Crime",
    },
    emoji: "๐ต๏ธโโ๏ธ",
  },
  {
    id: 99,
    name: {
      "ar-SA": "ูุซุงุฆูู",
      "en-US": "Documentary",
    },
    emoji: "๐",
  },
  {
    id: 18,
    name: {
      "ar-SA": "ุฏุฑุงูุง",
      "en-US": "Drama",
    },
    emoji: "๐ญ",
  },
  {
    id: 10751,
    name: {
      "ar-SA": "ุนุงุฆูู",
      "en-US": "Family",
    },
    emoji: "๐จโ๐ฉโ๐งโ๐ฆ",
  },
  {
    id: 14,
    name: {
      "ar-SA": "ูุงูุชุงุฒูุง",
      "en-US": "Fantasy",
    },
    emoji: "๐ฒ",
  },
  {
    id: 36,
    name: {
      "ar-SA": "ุชุงุฑูุฎู",
      "en-US": "History",
    },
    emoji: "๐",
  },
  {
    id: 27,
    name: {
      "ar-SA": "ุฑุนุจ",
      "en-US": "Horror",
    },
    emoji: "โฐ",
  },
  {
    id: 10402,
    name: {
      "ar-SA": "ููุณููู",
      "en-US": "Music",
    },
    emoji: "๐น",
  },
  {
    id: 9648,
    name: {
      "ar-SA": "ุบููุถ",
      "en-US": "Mystery",
    },
    emoji: "๐๏ธโ๐จ๏ธ",
  },
  {
    id: 10749,
    name: {
      "ar-SA": "ุฑููุงูุณู",
      "en-US": "Romance",
    },
    emoji: "๐",
  },
  {
    id: 878,
    name: {
      "ar-SA": "ุฎูุงู ุนููู",
      "en-US": "Science Fiction",
    },
    emoji: "๐ค",
  },
  {
    id: 10770,
    name: {
      "ar-SA": "ูููู ุชููุงุฒู",
      "en-US": "TV Movie",
    },
    emoji: "๐บ",
  },
  {
    id: 53,
    name: {
      "ar-SA": "ุฅุซุงุฑุฉ",
      "en-US": "Thriller",
    },
    emoji: "๐ซ",
  },
  {
    id: 10752,
    name: {
      "ar-SA": "ุญุฑุจ",
      "en-US": "War",
    },
    emoji: "โ๏ธ",
  },
  {
    id: 37,
    name: {
      "ar-SA": "ุบุฑุจู",
      "en-US": "Western",
    },
    emoji: "๐ค?",
  },
];
/**
 *
 * @param {String} lan
 * @param {Array} genre
 * @returns {String}
 */
const formatGenres = (lan, genre = Genres) => {
  let reponse = "";
  // eslint-disable-next-line consistent-return
  genre.forEach((g, index, array) => {
    if (index === array.length - 1) {
      reponse += `- ${g.name[lan]} ${g.emoji}`;
      return reponse;
    }
    reponse += `- ${g.name[lan]}  ${g.emoji}\n`;
  });
  return reponse;
};

const getGenresByids = (ids) => Genres.filter((t) => ids.includes(t.id));
const getIdByName = (lang, name) => {
  let id;
  Genres.forEach((t) => {
    if (t.name[lang].toLowerCase() === name.toLowerCase()) {
      id = t.id;
    }
  });
  return `${id}`;
};

const printGenres = (lan, genre) => {
  const ids = [];
  if (Number.isFinite(genre[0])) {
    return formatGenres(lan, getGenresByids(genre));
  }
  genre.forEach((t) => ids.push(t.id));
  return formatGenres(lan, getGenresByids(ids));
};

module.exports = {
  formatGenres,
  printGenres,
  getIdByName,
};
