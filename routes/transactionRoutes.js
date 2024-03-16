const controller = require('../controller/transactionController')
const express = require('express')
const transactionRouter = express.Router()

transactionRouter.post('/items/:id/transaction', controller.createTransaction)
transactionRouter.get('/items/:id/transactions', controller.getTransactions)

module.exports = transactionRouter