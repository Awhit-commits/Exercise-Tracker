//Importing required files for express server 
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const user = require('./routes/user');
const exercises = require('./routes/exercises')
const bodyParser = require('body-parser');
const path = require('path')
require ('dotenv').config();

//middleware
const app = express();

app.use(cors());
app.use(express.json());


app.use('/users',user);
app.use('/exercises',exercises)

//
if (process.env.NODE_ENV === 'production') {           
    app.use(express.static('../client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
//
let mongoDB = 'mongodb+srv://ndrwwhtmr:VaUOsbhP8iq8kqQ2@cluster0-taich.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGODB_URI || mongoDB, { useNewUrlParser: true }); 
mongoose.connection.once('open', () => {
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', err => {
  console.log('Mongoose Connection Error : ' + err);
});
//Storing port inside of variable
const port = process.env.PORT||5000;

app.listen(port,()=>{console.log(`Listening on port ${port}`)})