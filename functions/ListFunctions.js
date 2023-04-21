const getPath = require('./utils/getPath')
const constructFileObjects = require('./utils/constructFileObjects')
const constructObjects = require('./utils/construcObjects')
const createUniqueArray = require('./utils/createUniqueArray')
const formatList = require('./utils/formatList')
const writeFile = require('./utils/writeFile')

exports.updateList = async (req, res) => {
  const { file } = req.body
  const filePath = getPath(file)
  try {
    const fileObjects = await constructFileObjects(filePath)
    const newObjects= constructObjects(req.body.new_values)
    const combinedObjects = createUniqueArray(fileObjects, newObjects)
    const newFileContent = formatList(combinedObjects)
    const response = await writeFile(filePath, newFileContent)
    res.status(200).json({sucess: true, data: response})
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred' })
  }
}

// TODO: intake file so I don't need to send the array, with the same name in it's own folder and 