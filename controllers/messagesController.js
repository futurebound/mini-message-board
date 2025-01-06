const db = require('../db/queries')

async function messagesAllGet(req, res) {
  console.log('calling db to get messages... ')
  const messages = await db.getAllMessages()
  console.log('Messages: ', messages)
  // res.send('Messages: ' + messages.map((message) => {

  // })
  res.render('index', { title: 'Mini Messageboard', messages: messages })
}

module.exports = {
  messagesAllGet,
}
