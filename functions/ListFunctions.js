const getPath = require('./utils/getPath')
const constructObjects = require('./utils/construcObjects')
const updateFile = require('./utils/updateFile')
const constructFileObjects = require('./utils/constructFileObjects')

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
