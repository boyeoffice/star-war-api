const express = require('express');

const router = express.Router();

const { films, characters } = require('../controller/movie.controller');

router.get('/movies', films);
router.get('/people', characters);

module.exports = router;
