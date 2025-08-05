require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/user.routes.js");
const cors = require("cors");

const startServer = async () => {
    try {
        await connectDB();
        const app = express();
        const PORT = process.env.PORT || 5000;

        app.use(express.json());
        app.use(cors({
            origin: ["http://localhost:3000", "https://your-production-domain.com"],
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"],
        }));
        app.use("/api", userRoutes);

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}!`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();