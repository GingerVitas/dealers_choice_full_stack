const router = require('express').Router();
const Movie = require('../database/Movie');

router.get('/:id', async(req, res, next) => {
  try{
    res.send(await Movie.findByPk(req.params.id))
  }
  catch(ex){
    next(ex)
  }
})

router.delete('/:id', async(req, res, next) => {
  try{
    const movie = await Movie.findByPk(req.params.id);
    await movie.destroy();
    res.sendStatus(204)
  }
  catch(ex){
    next(ex)
  }
})

module.exports = router;