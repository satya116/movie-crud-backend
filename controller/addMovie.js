const movieModel = require('../model/movieSchema');



const addMovie = async (req, res) => {
    const movie = req.body; ///

    console.log(movie);

   

    try {
       await movieModel.create(movie)

        res.status(201).json({message: 'saved'})
    } catch (error) {
        console.log("Error while saving movie add", error.message);
    }

}

module.exports = addMovie;