const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// const url = "mongodb+srv://admin-penguine:admin-123@cluster0.kxvuors.mongodb.net/penguineDB";
const url = "mongodb://localhost/penguin";

mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;

