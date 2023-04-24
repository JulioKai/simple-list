function compareArrayElements(arr) {
    const len = arr.length
    const result = {}

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i !== j && arr[j].includes(arr[i])) {
                if (!result[arr[i]]) {
                    result[arr[i]] = [arr[j]]
                } else {
                    result[arr[i]].push(arr[j])
                }
            }
        }
    }

    return result
}

module.exports = compareArrayElements

//TODO implement this as another check
