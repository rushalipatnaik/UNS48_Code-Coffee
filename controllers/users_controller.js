const User = require('../models/userSchema');

module.exports.profile = (req,res)=>{
        return res.render('user_profile',{
            title:"Profile",
        });
}

module.exports.register = (req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_signUp',{
        title:"Sign Up"
    });
}

module.exports.login = (req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_signIn',{
        title:"Sign In"
    });
}

module.exports.signUp = (req,res)=>{
    console.log(req.body);
    if(req.body.password != req.body.confirmpassword){ return res.redirect('back');}
    User.findOne({email: req.body.email}, (err,user)=>{ 
        if(err){ return console.log('Error in Finding User in Signing Up: ', err); }
        if(!user){User.create(req.body, (err,user)=>{
            if(err){return console.log('Error in creating User: ', err)}
            console.log('User Created', user);
            return res.redirect('/users/login');
        })}
        else{
            return res.redirect('back');
        }
    })
    
}

module.exports.signIn = (req,res)=>{
          return res.redirect('/');
}

module.exports.signOut = (req,res)=>{
       req.logout();
       return res.redirect('/users/login');
}