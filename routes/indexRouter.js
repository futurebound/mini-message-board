const { Router } = require('express')
const messagesController = require('../controllers/messagesController')
const indexRouter = Router()

// const messages = [
//   {
//     text: 'Hi there!',
//     user: 'Amando',
//     added: new Date(),
//   },
//   {
//     text: 'Hello World!',
//     user: 'Charles',
//     added: new Date(),
//   },
// ]

indexRouter.get('/', messagesController.messagesAllGet)
// res.render('index', { title: 'Mini Messageboard', messages: messages })

// indexRouter.post('/new', (req, res) => {
//   // console.log(req.body)
//   messages.push({
//     text: req.body.messageText,
//     user: req.body.author,
//     added: new Date(),
//   })

//   res.redirect('/')
// })

module.exports = indexRouter
