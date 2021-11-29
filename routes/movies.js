const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            return res.status(200).send(movie);
        } else {
            return res.status(404).send('Not Found');
        }
    } catch (error) {
        res.status(404).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movie.deleteOne({id : req.params.id});
        if (movie) {
            res.status(200).send(movie);
        } else {
            res.status(404).send('Not Found');
        }
    } catch (error) {
        res.status(404).send(error);
    }
});

router.post('/', async (req, res) => {    
    const movie = new Movie(req.body);
    try {
        const result = await movie.save();
        res.status(201).send(result);
    } catch(error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            movie.set(req.body);
            const updateResult = await movie.save();
            res.status(200).send(updateResult);
        } else {
            res.status(404).send('Not Found');
        }
    } catch(error) {
        res.status(500).send(error);
    }
})

module.exports = router;
