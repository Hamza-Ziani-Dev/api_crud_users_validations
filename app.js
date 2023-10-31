const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')
const routerUsers = require("./routes/users.route");


const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('=============== DB Connect ! =========='))
.catch((err)=>console.log(err.message))

app.use("/api", routerUsers);


app.listen(process.env.PORT, ()=>{
    console.log('Server Is Run In Port 3001');
})

module.exports = app;
