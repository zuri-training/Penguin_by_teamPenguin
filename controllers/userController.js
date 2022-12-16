// installed bcrypt to hash password
const bcrypt = require('bcrypt');
const passport = require('passport');
const saltRounds = 10;

// require the user model from models
const { User } = require("../models/userModel");




// Signup New USer
const addUser = async (req, res) => {
        const { name, email, pwd, rpwd } = await req.body;

        if (name === "" || email === "" || pwd === "" || rpwd === "") {
       return  res.status(200).json({message: "empty Fields"});
        } else {
         User.findOne({email:email}, (err, result) => {
             if(result){
            return res.status(200).json({message: "User already Exist"});
             } else {
                if (pwd === rpwd) {           
                            User.register({username: email, fullName: name, email: email, password: pwd}, pwd, (err, result) =>{
                                if (err) {
                                    console.log(err.message);
                                         res.redirect('/login');
                                    } else {
                                        passport.authenticate("local")((req, res)=> {
                                        res.status(200).redirect('/');
                                    })
                                }
                            })
                } else {
                   return res.status(201).json({message: "Password does not match"});
                }
             }
         })
    }   
}

// Login User
const verifyUser = async (req, res) => {
    try {
    const { email, pwd } = await req.body
        const user = new User({
            username: email,
            password: pwd
        })
        req.login(user, (err) =>{
            if (err) {
                console.log(err.message);
                res.redirect("/login");
            } else {
                passport.authenticate("local")((req, res)=> {
                    res.redirect('/');
                })
            }
        })
        } catch (err) {
            // if user does not exist, send error
            res.status(404).json({message: err.message});
        }
}

module.exports = {
    addUser,
    verifyUser
}