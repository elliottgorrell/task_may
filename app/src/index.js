const mongoose = require('mongoose');

//db config
const mongoDB = 'mongodb://database:27017/elliott';
mongoose.connect(mongoDB, null)
    .catch(err => {
        console.log(err)
    });
const db = mongoose.connection;