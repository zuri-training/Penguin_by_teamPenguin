// installed bcrypt to hash password
const bcrypt = require('bcrypt');
const saltRounds = 10;
// require the user model from models
const { User } = require("../models/Users");

const {MongoClient, ObjectId} = require('mongodb')
require('dotenv').config() 
const client = new MongoClient(process.env.MONGO_URI)
const db = client.db('pricecompare')

// Signup New USer
const addUser = async (req, res) => {
        const { email, username, password} = await req.body
    
    // Check if user exist
       User.findOne({ email: email }, (err, result) => {
       if (result) 
            // if user exist, send a message
           return res.status(200).json({message: "User already Exist"});
        }) 
        
     try {
         
        // if user dont exist, signup user
            bcrypt.hash(password, saltRounds, function(err, hash) {      
                const newUser = new User({
                    username: username,
                    email: email,
                    password: hash
                })
            
                // save user to DB
                db.collection('price').insertOne(newUser)
                
                res.status(201).json({
                    message: `Signup Successful`,
                    });
            });
        
         } catch (err) {
        
         res.status(500).json({
                       message: `Signup Not successful  ${err.message}`
                    });
        
       }   
   

}

// Login User
const verifyUser = async (req, res) => {
    const { email, passowrd } = req.body
    // Check if user exist
    User.findOne({email: email}, (err, result) => {
        if (result) { 
            // if user exist check if password match
            const hash = result.password;
            bcrypt.compare(passowrd, hash, function(err, doc) {    
                if(doc) {
                    //  if password match login users
                    res.status(200).json({message: "Login Successfully"});
                } else {
                    // send error if password do not match
                    res.status(200).json({message: "Password Not Match"});
                }
            });
        } else {
            // if user does not exist, send error
            res.status(404).json({message: "User not found"});
        }
    })

}
module.exports = {
    addUser,
    verifyUser
}