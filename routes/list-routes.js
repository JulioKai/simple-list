const express = require('express')
const router = express.Router()
const ListFunctions = require('../functions/ListFunctions')
const validateFilePath = require('../middleware/validateFilePath')

router.post('/', validateFilePath, ListFunctions.updateList)
router.post('/file', validateFilePath, ListFunctions.updateListFromFile)

module.exports = router
