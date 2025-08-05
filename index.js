const express = require("express")
const connectDB = require("./config/db.js")
const userRoutes = require("./routes/user.routes.js")
const cors = require("cors")

connectDB()
const app = express()
const PORT = 5000 || process.env.PORT
app.use(express.json())
app.use(cors())

app.use("/", userRoutes)


app.listen(PORT, () => {
    console.log("Server is listening~!")
})