const Genres = [
  {
    id: 10759,
    name: {
      "ar-SA": "ุงูุดู",
      "en-US": "Action",
    },
    emoji: "๐ฌ",
  },
  {
    id: 16,
    name: {
      "ar-SA": "ุงููู",
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
    id: 10762,
    name: {
      "ar-SA": "ุงุทูุงู",
      "en-US": "Kids",
    },
    emoji: "๐ถ",
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
    id: 10763,
    name: {
      "ar-SA": "ุงุฎุจุงุฑู",
      "en-US": "News",
    },
    emoji: "๐ฐ",
  },
  {
    id: 10764,
    name: {
      "ar-SA": "ูุงูุนู",
      "en-US": "Reality",
    },
    emoji: "๐คต",
  },
  {
    id: 10765,
    name: {
      "ar-SA": "ุฎูุงูู",
      "en-US": "Sci-Fi",
    },
    emoji: "๐ฒ",
  },
  {
    id: 10766,
    name: {
      "ar-SA": "ุงุฌุชูุงุนู",
      "en-US": "Soap",
    },
    emoji: "๐",
  },
  {
    id: 10767,
    name: {
      "ar-SA": "ุญูุงุฑู",
      "en-US": "Talk",
    },
    emoji: "๐ฃ",
  },
  {
    id: 10768,
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
    emoji: "๐ค ",
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
