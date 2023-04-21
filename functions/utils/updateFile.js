const constructFileObjects = require('./constructFileObjects')
const createUniqueArray = require('./createUniqueArray')
const formatList = require('./formatList')
const writeFile = require('./writeFile')

const updateFile = async (filePath, newObjects) => {
    try {
        const fileObjects = await constructFileObjects(filePath)
        const combinedObjects = createUniqueArray(fileObjects, newObjects)
        const newFileContent = formatList(combinedObjects)
        const response = await writeFile(filePath, newFileContent)
        return response
    } catch (error) {
        throw error
    }
}

module.exports = updateFile
