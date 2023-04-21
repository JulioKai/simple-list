const express = require('express')
const router = express.Router()
const ListFunctions = require('../functions/ListFunctions')
const validateFilePath = require('../middleware/validateFilePath')

router.get('/:file', validateFilePath, ListFunctions.getList)
router.post('/update-file', validateFilePath, ListFunctions.updateList)
router.post(
    '/update-from-file',
    validateFilePath,
    ListFunctions.updateListFromFile
)
router.post(
    '/find-duplicates',
    validateFilePath,
    ListFunctions.findDuplicatesInsideAFile
)

module.exports = router
