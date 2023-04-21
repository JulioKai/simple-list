const formatList = (array) => {
    array.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) return -1
        if (a.toLowerCase() > b.toLowerCase()) return 1
        return 0
    })
    return array.join('\n')
}

module.exports = formatList
