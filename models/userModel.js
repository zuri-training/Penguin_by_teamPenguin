const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const { mongoose } = require("../config/database");
const Schema = mongoose.Schema;


const userSchema = new Schema({
   fullName: {
    type: String
   },
   
   email: {
    type: String,
    unique: true
   },
   date: {
      type: Date,
      default: Date.now
   }
})

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = {User}
