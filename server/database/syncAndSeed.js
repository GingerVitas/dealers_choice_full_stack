const top27 = require('./seedData');
const {db, Movie} = require('./index');

const syncAndSeed = async() => {
  try{
    await db.sync({force: true})

    await Movie.bulkCreate(top27).then(console.log('Movies Seeded!'))
  }
  catch(ex){
    console.log(ex)
  }
};

module.exports = syncAndSeed;