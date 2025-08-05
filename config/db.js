const mongoose = require("mongoose")

const connectDB = async () => {
    mongoose.connect(process.MONGO_URI.env).then((res) => {
        console.log("Mongodb Connected Successfully")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectDB