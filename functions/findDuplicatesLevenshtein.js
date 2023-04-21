const levenshtein = require('fast-levenshtein')

const findDuplicates = (array) => {
    const duplicates = {}
    for (let i = 0; i < array.length; i++) {
        const str1 = array[i]
        for (let j = i + 1; j < array.length; j++) {
            const str2 = array[j]
            const distance = levenshtein.get(str1, str2)
            const maxLength = Math.max(str1.length, str2.length)
            const similarity = (maxLength - distance) / maxLength
            if (similarity >= 0.7) {
                if (!duplicates[str1]) duplicates[str1] = []
                if (!duplicates[str2]) duplicates[str2] = []
                duplicates[str1].push(str2)
                duplicates[str2].push(str1)
            }
        }
    }
    return duplicates
}

module.exports = findDuplicates
