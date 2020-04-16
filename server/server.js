//Importing required files for express server 
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const user = require('./routes/user');
const exercises = require('./routes/exercises')

require ('dotenv').config();

//middleware
const app = express();

app.use(cors());
app.use(express.json());

app.use('/users',user);
app.use('/exercises',exercises)
let mongoDB = 'mongodb+srv://ndrwwhtmr:VaUOsbhP8iq8kqQ2@cluster0-taich.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//Storing port inside of variable
const port = process.env.PORT||5000;

app.listen(port,()=>{console.log(`Listening on port ${port}`)})