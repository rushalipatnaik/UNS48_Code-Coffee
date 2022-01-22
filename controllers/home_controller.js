module.exports.landing = (req,res)=>{
   // console.log(req.cookies);
   // res.cookie('user_id',27);

   return res.render('landing',{
      title:'Homepage'
   });
   
}
