const path = require('path');

const getPath = (fileName) => {
  return path.join(__dirname, `../../data/${fileName}.txt`)
}

module.exports = getPath