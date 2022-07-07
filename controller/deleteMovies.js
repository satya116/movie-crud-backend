const movieModel = require('../model/movieSchema');

const deleteMovie = async (req,res) => {
    try {
        await movieModel.deleteOne({_id: req.params.id})
        res.status(200).json({message: "Deleted one"})
    } catch (error) {
        console.log("Errror while calling delete");
    }
}

module.exports = deleteMovie;