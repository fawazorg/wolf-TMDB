const jimp = require("jimp");

/**
 * Get random element from array.
 * @param {Array} array
 */
const random = (array) => array[Math.floor(Math.random() * array.length)];

/**
 * Get full Url of image.
 * @param {String} image
 */
const imageURL = (image) => `https://image.tmdb.org/t/p/w500${image}`;

/**
 * convert a image to buffer
 * @param {String} url
 */
const imageBuffer = async (url) => {
  let imagebuffer;
  await jimp
    .read(url)
    .then(async (data) => {
      await data
        .getBufferAsync(jimp.MIME_JPEG)
        // eslint-disable-next-line no-return-assign
        .then((results) => (imagebuffer = results))
        .catch((e) => {
          console.log(e);
        });
    })
    .catch((e) => {
      console.log(e);
    });
  return imagebuffer;
};

module.exports = {
  random,
  imageBuffer,
  imageURL,
};
