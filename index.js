require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 8000;
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passportlocal = require('./config/passport-local-strategy');
const passport = require('passport');
const MongoStore = require('connect-mongo');

app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(expressLayout);
app.use(cookieParser());

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views', 'views');

app.use(session({
    name:'soothe',
    secret:'soothe',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*600*100)
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    },
    (err)=>{
        return console.log(err || 'Connect-MongoDB Setup');
    }
    )
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'));

app.listen(port,(err)=>{
    if(err){
        return console.log('Error in running the Server:',err);
    }
    else{
        return console.log('Server is running on Port:', port);
    }
})