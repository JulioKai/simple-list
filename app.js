const express = require('express')
const app = express()
const helmet = require('helmet')
const router = require('./routes/router')

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/v1', router)

app.listen(8000, () => {
    console.log('server running at port 8000')
})
