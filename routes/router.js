const express = require('express')
const router = express.Router()
const listRoutes = require('./list-routes')

router.use('/', listRoutes)

module.exports = router