const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/userSchema');

passport.use(new localStrategy({
    usernameField: 'email'
},
   function(email,password,done){
       User.findOne({email:email}, (err,user)=>{
           if(err){
               console.log('Error in finding user --> Password', err);
               return done(err);
           }
           if(!user || user.password != password){
               console.log('Invalid Username/Password');
               return done(null, false);
           }
           return done(null, user);

       })
   }
));

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id, (err,user)=>{
        if(err){
            console.log('Error in finding user --> Password', err);
            return done(err);
        }
        return done(null,user);
    })
})

passport.checkAuthentication = (req,res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/login');
}

passport.setAuthenticatedUser = (req, res, next)=>{
    if(req.isAuthenticated()){
        res.locals.user= req.user;
    }
    next();
}

module.exports = passport;