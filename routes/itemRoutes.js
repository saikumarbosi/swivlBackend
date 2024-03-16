const controller = require('../controller/itemController')
const express = require('express')
const itemRouter = express.Router()

itemRouter.post('/items', controller.createItem)
itemRouter.get('/items', controller.getItems)
itemRouter.get('/items/:id', controller.getItemsById)
itemRouter.put('/items/:id', controller.updateItem)
itemRouter.delete('/items/:id', controller.deleteItem)

module.exports = itemRouter