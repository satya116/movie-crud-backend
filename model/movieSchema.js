const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieName: String,
    rating: String,
    cast: String,
    //cast: [name: String],
    genre: String,
    releaseDate: String,
    // releaseDate: {
    //     type: Date
    // },
    //user: { type: 'ObjectId', ref: 'User'}
})


module.exports = mongoose.model('movie', movieSchema)