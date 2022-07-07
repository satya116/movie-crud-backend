const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    //movieList: []
})


module.exports = mongoose.model('User', userSchema)