const fs = require('fs').promises;

const readFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = readFile;