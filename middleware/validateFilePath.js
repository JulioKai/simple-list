const getListOfFiles = require('../functions/utils/getListOfFiles')

const validateFilePath = async (req, res, next) => {
  const { file } = req.body
  try {
    const currentFiles = await getListOfFiles()
    if (currentFiles.includes(file)) {
      next();
    } else {
      res.status(404).json({ success: false, message: 'The requested file does not exist' })
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
}

module.exports = validateFilePath;