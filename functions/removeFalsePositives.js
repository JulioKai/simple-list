const falsePositives = require('../data/falsePositives')

const removeDuplicates = (obj1, fileName) => {
    if (falsePositives[fileName]) {
        return Object.entries(obj1).reduce((result, [key, arr1]) => {
            const arr2 = falsePositives[fileName][key] || []
            const filteredArr1 = arr1.filter((item) => !arr2.includes(item))
            const filteredArr2 = arr2.filter((item) => !arr1.includes(item))
            if (filteredArr1.length > 0 || filteredArr2.length > 0) {
                result[key] = [...filteredArr1, ...filteredArr2]
            }
            return result
        }, {})
    } else {
        return obj1
    }
}

module.exports = removeDuplicates
