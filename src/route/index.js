const express = require('express');

const router = express.Router();

const commentRequest = require('../requests/comment.request');
const { films, characters } = require('../controller/movie.controller');
const { comments, createComment } = require('../controller/comment.controller');

router.get('/movies', films);
router.get('/people', characters);
router.get('/comments', comments);
router.post('/comments', commentRequest, createComment);

module.exports = router;
