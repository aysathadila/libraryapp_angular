const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryappangular', { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    
    email: String,
    password: String,
    name: String,
    review:Array
});



var userData = mongoose.model('users', UserSchema); 
       

module.exports = userData;
