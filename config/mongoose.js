const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind('Error in connecting to Database'));

db.once('open', ()=>{
    console.log('Successfully Connected to Database :: MongoDB');
})

module.exports = db;