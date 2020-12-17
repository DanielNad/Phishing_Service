require("dotenv").config({ path: ".env" });
const express = require('express');
const Database = require('./Utils/DatabaseConnection');

const api = require('./Routes/api/getIndicator')

const app = express();
const PORT = process.env.PORT || 3001
const DB = new Database()
// External
app.use(express.json())
// Routes
app.use("/api",api)

app.listen(PORT , () => {
    console.log(`Server connected on port ${PORT}`);
})