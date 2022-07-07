const movieModel = require('../model/movieSchema');


const editedMovies = async (req, res) => {
    const editedmovie = req.body;

    console.log("edited details", editedmovie);

    try {
        await movieModel.updateOne({_id: req.params.id}, editedmovie)
        res.status(201).json({message: 'saved'})
    } catch (error) {
        console.log("Error while Editing EditedDetails", error.message);
    }

}

module.exports = editedMovies;