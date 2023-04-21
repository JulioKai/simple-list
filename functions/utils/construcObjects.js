const normalize = require('./normalize')

const constructObjects = (newElementsArr) => {
    return newElementsArr.map((element) => ({
        name: element,
        normalized_name: normalize(element),
    }))
}

module.exports = constructObjects
