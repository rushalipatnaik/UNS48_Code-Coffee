const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.end('Soothe Theself');
})

app.listen(port,(err)=>{
if(err){
    return console.log('Error in running server', err);
}
else{
    return console.log('Server is running on port::', port);
}
})