const { Router } = require('express')
const messagesController = require('../controllers/messagesController')
const indexRouter = Router()

indexRouter.get('/', messagesController.messagesAllGet)

indexRouter.post('/new', messagesController.newMessagePost)

module.exports = indexRouter
