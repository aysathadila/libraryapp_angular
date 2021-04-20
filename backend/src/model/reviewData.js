const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kdramareview', { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

var NewReviewSchema = new Schema({
    userid : Number,
    kdramaid : Number,
    review : String,
    
});

var reviewData = mongoose.model('review', NewReviewSchema);                        //UserData is the model and NewBookData is the schema,kdramas is the name of collectn

module.exports = reviewData;