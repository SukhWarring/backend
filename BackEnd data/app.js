const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config');
//Middlewares
app.use(bodyParser.json());

//Import Routes
const ObjectRoutes = require('./routes/objects');

app.use('/objectsList', ObjectRoutes)
//routes



//DB connection 
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
{
        console.log('Connect to DB');
});

app.listen(3000);