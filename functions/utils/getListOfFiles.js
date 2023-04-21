const fs = require('fs').promises
const path = require('path')

const getListOfFiles = async () => {
  const folderPath = path.join(__dirname, '../../data')
  try {
    const files = await fs.readdir(folderPath)
    const fileNames = files.map(file => path.parse(file).name)
    return fileNames
  } catch (error) {
    throw error
  }
}

module.exports = getListOfFiles