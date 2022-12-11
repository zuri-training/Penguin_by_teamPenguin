const mongoose = require('mongoose')
require('dotenv').config() 
const { MONGO_URI } = process.env
const { MongoClient } = require('mongodb')

const connectDB =  async () => {
  try {
  const client = new MongoClient(MONGO_URI)
  await client.connect()
  console.log('MongoDB Connected')

  } catch (error) {
    console.log(error.message)
    console.log('connection failed')
  }
}

 
module.exports = connectDB;