require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const routes = require('./routes/index');
const { connect } = require('./config/mongodb');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

app.use(errorHandler)

connect()
    .then((db) => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })

module.exports = app

