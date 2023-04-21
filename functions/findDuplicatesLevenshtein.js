const levenshtein = require('fast-levenshtein')

function calculateSimilarity(str1, str2) {
    const distance = levenshtein.get(str1, str2)
    const maxLength = Math.max(str1.length, str2.length)
    return (maxLength - distance) / maxLength
}

function findDuplicates(array, threshold) {
    const duplicates = {}

    for (let i = 0; i < array.length; i++) {
        const currentStr = array[i]
        for (let j = i + 1; j < array.length; j++) {
            const otherStr = array[j]
            const similarity = calculateSimilarity(currentStr, otherStr)

            if (similarity >= threshold) {
                if (!duplicates[currentStr]) duplicates[currentStr] = []
                if (!duplicates[otherStr]) duplicates[otherStr] = []
                duplicates[currentStr].push(otherStr)
                duplicates[otherStr].push(currentStr)
            }
        }
    }

    return duplicates
}

module.exports = findDuplicates
