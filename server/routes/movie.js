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

module.exports = router;