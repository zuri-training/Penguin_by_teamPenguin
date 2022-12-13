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
        const { email, username, password } = await req.body
    
    // Check if user exist
    //    User.findOne({ email:email }, (err, data) => {
    //    if (data) 
    //         // if user exist, send a message
    //        return res.status(200).json({message: "User already Exist"});
        
    //     })
        
       
        
     try {
         const result = await db.collection('price').findOne({email:email});
         if(result){
             return res.status(200).json({message: "User already Exist"});
         }
        
        // if user dont exist, signup user
            bcrypt.hash(password, saltRounds, (err, hash) => {      
                const newUser = {
                    username: username,
                    email: email,
                    password: hash
                }
            
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
    try {
    const { email, password } = req.body
    // Check if user exist
    const result = await db.collection('price').findOne({email: email});
    if(result){
        const hash = result.password;
        const hashResult = await bcrypt.compare(password, hash);
        
        //  if password match login users
        if(hashResult){
            return res.status(200).json({message: "Login Successfully"});
        }
        
        // send error if password do not match
        return res.status(200).json({message: "Password Not Match"});
        }
        
        res.status(200).json({message: "User does not exist"});
        } catch (err) {
            // if user does not exist, send error
            res.status(404).json({message: err.message});
        }
}

module.exports = {
    addUser,
    verifyUser
}