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

module.exports = router;