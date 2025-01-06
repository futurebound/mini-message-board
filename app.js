const dotenv = require('dotenv')
const express = require('express')
const path = require('path')

const app = express()
dotenv.config()

app.use(express.urlencoded({ extended: true }))

const indexRouter = require('./routes/indexRouter')
const newMessageRouter = require('./routes/newMessageRouter')
app.use('/', indexRouter)
app.use('/new', newMessageRouter)

// EJS setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
