const router = require('express').Router();
const Movie = require('../database/Movie');

router.get('/', async(req, res, next) => {
  try{
    res.send(await Movie.findAll())
  }
  catch(ex){
    next(ex)
  }
})

router.get('/:id', async(req, res, next) => {
  try{
    console.log('Router Test', req.params.id)
    res.send(await Movie.findByPk(req.params.id))
  }
  catch(ex){
    next(ex)
  }
})

router.post('/', async(req, res, next) => {
  try{
    const newMovie = await Movie.create(req.body);
    res.status(201).send(newMovie)
  }
  catch(ex){
    next(ex)
  }
})

module.exports = router;