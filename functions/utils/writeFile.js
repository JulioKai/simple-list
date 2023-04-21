const fs = require('fs').promises

const writeFile = async (filePath, data) => {
    try {
        await fs.writeFile(filePath, data)
        const filename = filePath.split('/').pop()
        return {
            success: true,
            message: `The file ${filename} has been written successfully.`,
        }
    } catch (error) {
        throw error
    }
}

module.exports = writeFile
