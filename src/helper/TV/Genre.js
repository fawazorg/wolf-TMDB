const Genres = [
  {
    id: 10759,
    name: {
      "ar-SA": "اكشن",
      "en-US": "Action",
    },
    emoji: "🎬",
  },
  {
    id: 16,
    name: {
      "ar-SA": "انمي",
      "en-US": "Animation",
    },
    emoji: "💮",
  },
  {
    id: 35,
    name: {
      "ar-SA": "كوميدي",
      "en-US": "Comedy",
    },
    emoji: "😂",
  },
  {
    id: 80,
    name: {
      "ar-SA": "جريمة",
      "en-US": "Crime",
    },
    emoji: "🕵️‍♂️",
  },
  {
    id: 99,
    name: {
      "ar-SA": "وثائقي",
      "en-US": "Documentary",
    },
    emoji: "📑",
  },
  {
    id: 18,
    name: {
      "ar-SA": "دراما",
      "en-US": "Drama",
    },
    emoji: "🎭",
  },
  {
    id: 10751,
    name: {
      "ar-SA": "عائلي",
      "en-US": "Family",
    },
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    id: 10762,
    name: {
      "ar-SA": "اطفال",
      "en-US": "Kids",
    },
    emoji: "👶",
  },
  {
    id: 9648,
    name: {
      "ar-SA": "غموض",
      "en-US": "Mystery",
    },
    emoji: "👁️‍🗨️",
  },
  {
    id: 10763,
    name: {
      "ar-SA": "اخباري",
      "en-US": "News",
    },
    emoji: "📰",
  },
  {
    id: 10764,
    name: {
      "ar-SA": "واقعي",
      "en-US": "Reality",
    },
    emoji: "🤵",
  },
  {
    id: 10765,
    name: {
      "ar-SA": "خيالي",
      "en-US": "Sci-Fi",
    },
    emoji: "🐲",
  },
  {
    id: 10766,
    name: {
      "ar-SA": "اجتماعي",
      "en-US": "Soap",
    },
    emoji: "😄",
  },
  {
    id: 10767,
    name: {
      "ar-SA": "حواري",
      "en-US": "Talk",
    },
    emoji: "🗣",
  },
  {
    id: 10768,
    name: {
      "ar-SA": "حرب",
      "en-US": "War",
    },
    emoji: "⚔️",
  },
  {
    id: 37,
    name: {
      "ar-SA": "غربي",
      "en-US": "Western",
    },
    emoji: "🤠",
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
