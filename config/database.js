const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const url = "mongodb://localhost:27017/penguineDB";

mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;

