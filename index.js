const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const expressLayout = require('express-ejs-layouts')
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(expressLayout);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/',require('./routes'));

app.listen(port,(err)=>{
if(err){
    return console.log('Error in running server', err);
}
else{
    return console.log('Server is running on port::', port);
}
})