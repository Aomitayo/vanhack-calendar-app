var express = require('express')
var cookieParser = require('cookie-parser')
var cors = require('cors')
// var bodyParser = require('body-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var authRouter = require('./routes/auth')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(bodyParser())
app.use(cors({ origin: true }))

app.use('/api/auth', authRouter)
app.use('/api/events', indexRouter)
app.use('/api/users', usersRouter)

module.exports = app
