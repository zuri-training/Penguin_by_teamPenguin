require("dotenv").config();
const { json } = require("express");
const express = require('express');
const router = require("./routes/userRoutes");
const database = require('./config/database')

const app = express();
app.use(express.urlencoded({extended: true}));


database()

app.use(json())
const port = process.env.PORT || 8005;

app.use("/",router)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});