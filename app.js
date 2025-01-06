const dotenv = require('dotenv')
const express = require('express')
const path = require('path')

dotenv.config()
const app = express()
app.use(express.urlencoded({ extended: true }))

const indexRouter = require('./routes/indexRouter')
const newMessageRouter = require('./routes/newMessageRouter')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// routes setup
app.use('/', indexRouter)
app.use('/new', newMessageRouter)

// error catch-all
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).send(err.message)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
