const dotenv = require('dotenv')
const express = require('express')

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})

app.get('/', (req, res) => res.send('sadfasdf world!'))
app.get('/new', (req, res) => res.send('new message form'))
