const express = require('express');
const dotenv = require('dotenv');
const path=require("path");
const ejs = require('ejs');
const viewRoutes = require('./src/Routes/route-views');
const apis = require('./src/Routes/route-apis');
const connectDB = require('./src/config/db');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.static('src/assets'));

app.set('view engine','ejs');
app.set('views', './src/views');

app.use(express.json());

// All Routes
app.use('/api', apis);
app.use('/', viewRoutes);


// Listening on Port 3000
app.listen(port, () => {
    console.log("Listening on port " + port);
})