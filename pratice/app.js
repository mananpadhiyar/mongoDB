const express = require("express")

// to connect mongoDB need to use mongosee
const app = express()

const apiRoute = require("./routes/apiRoute")

app.use("/" , apiRoute)

const mongosee = require("mongoose")

//add collection*
const MONGODB_URI = "mongodb://127.0.0.1:27017/restaurantsDB"

mongosee.connect(MONGODB_URI).then(() => {
    console.log("DB connected")
    app.listen(7001, () => {

        console.log("server running on port 7001")
    })

})


