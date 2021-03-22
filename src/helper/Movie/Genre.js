const Genres = [
  {
    id: 28,
    name: {
      "ar-SA": "اكشن",
      "en-US": "Action",
    },
    emoji: "🎬",
  },
  {
    id: 12,
    name: {
      "ar-SA": "مغامرة",
      "en-US": "Adventure",
    },
    emoji: "🚋",
  },
  {
    id: 16,
    name: {
      "ar-SA": "رسوم متحركة",
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
    id: 14,
    name: {
      "ar-SA": "فانتازيا",
      "en-US": "Fantasy",
    },
    emoji: "🐲",
  },
  {
    id: 36,
    name: {
      "ar-SA": "تاريخي",
      "en-US": "History",
    },
    emoji: "📜",
  },
  {
    id: 27,
    name: {
      "ar-SA": "رعب",
      "en-US": "Horror",
    },
    emoji: "⚰",
  },
  {
    id: 10402,
    name: {
      "ar-SA": "موسيقى",
      "en-US": "Music",
    },
    emoji: "🎹",
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
    id: 10749,
    name: {
      "ar-SA": "رومانسي",
      "en-US": "Romance",
    },
    emoji: "💏",
  },
  {
    id: 878,
    name: {
      "ar-SA": "خيال علمي",
      "en-US": "Science Fiction",
    },
    emoji: "🤖",
  },
  {
    id: 10770,
    name: {
      "ar-SA": "فيلم تلفازي",
      "en-US": "TV Movie",
    },
    emoji: "📺",
  },
  {
    id: 53,
    name: {
      "ar-SA": "إثارة",
      "en-US": "Thriller",
    },
    emoji: "🔫",
  },
  {
    id: 10752,
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
