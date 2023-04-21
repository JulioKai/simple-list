const readFile = require('./readFile')

const getFileArray = async (filePath) => {
    try {
        const fileContents = await readFile(filePath)
        const fileData = fileContents.toString().split('\n')
        return fileData
    } catch (error) {
        throw error
    }
}

module.exports = getFileArray
