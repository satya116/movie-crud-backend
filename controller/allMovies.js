const movieModel = require('../model/movieSchema');

const allMovies = async (req, res) => {
    try {
        const allmoviedata = await movieModel.find({})
        res.status(200).json(allmoviedata)
    } catch (error) {
        console.log("Error while calling all movie details");
    }
}

module.exports = allMovies;