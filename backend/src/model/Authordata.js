const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryappangular', { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    _id : Number,
    description : String,
    title : String,
    genre : String,
    image : String
});

var AuthorData = mongoose.model('authors', NewAuthorSchema);                        //UserData is the model and NewBookData is the schema,kdramas is the name of collectn

module.exports = AuthorData;