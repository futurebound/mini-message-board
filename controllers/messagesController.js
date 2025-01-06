const db = require('../db/queries')

async function messagesAllGet(req, res) {
  console.log('calling db to get messages... ')
  const messages = await db.getAllMessages()
  res.render('index', { title: 'Mini Messageboard', messages: messages })
}

async function newMessagePost(req, res) {
  console.log('username to be saved: ', req.body.username)
  console.log('message to be saved: ', req.body.messageText)
  const { username, messageText } = req.body
  await db.insertUsernameAndMessage(username, messageText)
  res.redirect('/')
}

module.exports = {
  messagesAllGet,
  newMessagePost,
}
