const fs = require('fs').promises;

const writeFile = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, data);
    return { success: true, message: `The file ${filePath} written successfully.` };
  } catch (error) {
    throw error;
  }
}

module.exports = writeFile;