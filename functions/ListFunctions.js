const getPath = require('./utils/getPath')
const constructObjects = require('./utils/construcObjects')
const updateFile = require('./utils/updateFile')
const constructFileObjects = require('./utils/constructFileObjects')
const getFileArray = require('./utils/getFileArray')
const findDuplicates = require('./findDuplicatesLevenshtein')

exports.getList = async (req, res) => {
    try {
        const { file } = req.params
        const filePath = getPath(file)
        const fileArray = await getFileArray(filePath)
        res.status(200).json({ success: true, data: fileArray })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'An error occurred' })
    }
}

exports.updateList = async (req, res) => {
    const { file, new_values } = req.body
    const filePath = getPath(file)
    try {
        const response = await updateFile(
            filePath,
            constructObjects(new_values)
        )
        res.status(200).json({ success: true, data: response })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'An error occurred' })
    }
}

exports.updateListFromFile = async (req, res) => {
    const { file } = req.body
    const filePath = getPath(file)
    const inputFilePath = getPath(file, 'input')
    try {
        const newFileObjects = await constructFileObjects(inputFilePath)
        const response = await updateFile(filePath, newFileObjects)
        res.status(200).json({ success: true, data: response })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'An error occurred' })
    }
}

exports.findDuplicatesInsideAFile = async (req, res) => {
    try {
        const { file } = req.body
        const filePath = getPath(file)
        const fileArray = await getFileArray(filePath)
        const duplicates = findDuplicates(fileArray, 0.6)
        res.status(200).json({
            success: true,
            cases: Object.keys(duplicates).length,
            data:
                Object.keys(duplicates).length > 0
                    ? duplicates
                    : 'there are no duplicates',
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'An error occurred' })
    }
}
