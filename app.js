const dotenv = require('dotenv')
const express = require('express')
const path = require('path')

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})

const indexRouter = require('./routes/indexRouter')
app.use('/', indexRouter)

// EJS setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/new', (req, res) => res.send('new message form'))
