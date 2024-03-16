const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    itemId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    type:{
        type: String,
        required: true
    },
    quantityItem:{
        type: Number,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Transaction", transactionSchema)