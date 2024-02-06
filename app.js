const express = require('express');
const dotenv = require('dotenv');
const ejs = require('ejs');
const viewRoutes = require('./src/Routes/views');
const apis = require('./src/Routes/apis');

dotenv.config();
const app = express();
const port = process.env.PORT;

app.set('view engine','ejs');
app.set('views', './src/views');
 
// All Routes

app.use('/api', apis)

app.use('/', viewRoutes);


// Listening on Port 3000
app.listen(port, () => {
    console.log("Listening on port " + port);
})