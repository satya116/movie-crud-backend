const movieModel = require('../model/movieSchema');

const editMovie = async (req, res) => {
    try {
        const movie = await movieModel.findById(req.params.id)
        res.status(200).json(movie)
    } catch (error) {
        console.log("Error", error.message);
    }
}

module.exports = editMovie;