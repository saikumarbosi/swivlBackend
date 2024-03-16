const Transaction = require('../models/Transaction')
const Item = require('../models/Item')

const createTransaction = async (req, res) => {
    try {
        const { type } = req.body
        const item = await Item.findById(req.params.id)
        if (!item) {
            return res.status(404).json({ message: "Item Not Found" })
        }
        const { _id, quantity } = item
        const transaction = new Transaction({ type, itemId: _id, quantityItem: quantity })
        await transaction.save()
        res.status(201).json(transaction)
    }
    catch (e) {
        console.log("Error: ", e)
        res.status(500).json({ message: "Server Error" })
    }
}

const getTransactions = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        if (!item) {
            return res.status(404).json({ message: "Item Not Found" })
        }
        const transaction = await Transaction.find()
        res.status(200).json(transaction)
    }
    catch (e) {
        console.log("Error: ", e)
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = { createTransaction, getTransactions }