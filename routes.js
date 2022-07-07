const router = require('express').Router();
const addmovie = require('./controller/addMovie');  //done
const allMovies = require('./controller/allMovies'); //done
const editMovie = require('./controller/editMovie');  // done

const editedMovies = require('./controller/editedMovies') //done
const deleteDetails = require('./controller/deleteMovies')  //done

router.get('/', (req, res) => {
    res.send('Server is running successfully');
})

router.post('/add', addmovie);
router.get('/all',  allMovies);
router.get('/edit/:id', editMovie)
router.put('/edit/:id', editedMovies)  
router.delete('/delete/:id', deleteDetails)

module.exports = router;