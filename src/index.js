const express = require("express");
const app = express();
const { serverConfig,connectDB } = require("./config");
const PORT = serverConfig.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/movie_db";
const dotenv = require('dotenv');

dotenv.config();









app.get("/", (req, res) => {
  res.status(200).json(
    { 
        message: "Welcome to the Movie Backend App!"
    });
});








const startServer = async () => {
  try {
    await connectDB(DB_URI);
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

startServer();

