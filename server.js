require("dotenv").config({ path: ".env" });
const express = require('express');
const Database = require('./Models/DatabaseConnection');

const app = express();
const PORT = process.env.PORT || 3001
const DB = new Database()

app.listen(PORT,()=>{
    console.log(`Server connected on port ${PORT}`);
})