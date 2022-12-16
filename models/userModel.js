const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const { mongoose } = require("../config/database");
const Schema = mongoose.Schema;


const userSchema = new Schema({
   fullName: {
    type: String,
    required: true
   },
   
   email: {
    type: String
   },
   googleId: {
      type: String
   },
   date: {
      type: Date,
      default: Date.now
   }
})

const favouriteSchema = new Schema({
   username: {
      type: String
   },
   favourite: {
      type: Array
   }
})

userSchema.plugin(findOrCreate);
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);
const Favourite = mongoose.model('Favourite', favouriteSchema);

module.exports = {User, Favourite}
