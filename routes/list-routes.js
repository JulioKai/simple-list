const express = require('express')
const router = express.Router()
const ListFunctions = require('../functions/ListFunctions')
const validateFilePath = require('../middleware/validateFilePath')

router.post('/', validateFilePath, ListFunctions.updateList)
router.post('/file', validateFilePath, ListFunctions.updateListFromFile)
router.post(
    '/file/duplicates',
    validateFilePath,
    ListFunctions.findDuplicatesInsideAFile
)

module.exports = router
