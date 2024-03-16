const Item = require('../models/Item')

const createItem = async(req, res) => {
    try{
       const {name, description, quantity} = req.body
       const item = new Item({name, description, quantity})
       await item.save()
       res.status(201).json(item)
    }
    catch(e){
        console.log("Error: ", e)
        res.status(500).json({message: "Server Error"})
    }
}

const getItems = async(req, res) => {
    try{
        const item = await Item.find()
        if(!item){
            return res.status(404).json({message: "Item Not Found"})
        }
        res.status(200).json(item)
    }
    catch(e){
        console.log("Error: ", e)
        res.status(500).json({message: "Server Error"})
    }
}

const getItemsById = async(req, res) => {
    try{
        const item = await Item.findById(req.params.id)
        if(!item){
            return res.status(404).json({message: "Item Not Found"})
        }
        res.status(200).json(item)
    }
    catch(e){
        console.log("Error: ", e)
        res.status(500).json({message: "Server Error"})
    }
}

const updateItem = async(req, res) => {
    try{
        const {name, description, quantity} = req.body
        const item = await Item.findByIdAndUpdate(req.params.id,{name, description, quantity})
        if(!item){
            return res.status(404).json({message: "Item Not Found"})
        }
        res.status(200).json(item)
    }
    catch(e){
        console.log("Error: ", e)
        res.status(500).json({message: "Server Error"})
    }
}

const deleteItem = async(req, res) => {
    try{
        const item = await Item.findByIdAndDelete(req.params.id)
        if(!item){
            return res.status(404).json({message: "Item Not Found"})
        }
        res.status(204).json({message: "Item Deleted Successfully"})
    }
    catch(e){
        console.log("Error: ", e)
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = {createItem, getItems, getItemsById, updateItem, deleteItem}