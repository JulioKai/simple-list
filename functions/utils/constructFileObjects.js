const readFile = require('./readFile')
const constructObjects = require('./construcObjects')

const constructFileObjects = async (filePath) => {
    try {
        const fileContents = await readFile(filePath)
        const fileData = fileContents.toString().split('\n')
        console.log(fileData)
        const fileObject = constructObjects(fileData)
        return fileObject
    } catch (error) {
        throw error
    }
}

module.exports = constructFileObjects
