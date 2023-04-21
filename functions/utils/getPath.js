const path = require('path')

const getPath = (fileName, dirname = 'data') => {
    return path.join(__dirname, `../../${dirname}/${fileName}.txt`)
}

module.exports = getPath
