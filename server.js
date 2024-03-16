const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const itemRouter = require('./routes/itemRoutes')
const transactionRouter = require('./routes/transactionRoutes')
const cors = require('cors')

dotEnv.config()
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDb Connected")
})
.catch((e) => {
    console.log("Error: ", e)
})

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(itemRouter)
app.use(transactionRouter)

const PORT = 5000 

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
})