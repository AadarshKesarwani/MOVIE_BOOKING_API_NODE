const express = require('express');
const router = express.Router();
const { movieController } = require('../controllers');
const { movieMiddleware } = require('../midddlewares');


//mba/api/v1/movies

router.post('/', 
    movieMiddleware.validateMovieCreateRequest, 
    movieController.createMovie);


router.get('/:id', 
    movieController.getMovie);


router.delete('/:id', 
    movieController.deleteMovie);


router.put('/:id',
    movieMiddleware.validateMovieUpdateRequest,
    movieController.updateMovie);
        






module.exports = router;