const seedData = require('./seedData');
const {db, Movie} = require('./index');

const syncAndSeed = async() => {
  try{
    await db.sync({force: true})

    await Movie.bulkCreate(seedData).then(console.log('Movies Seeded!'))
  }
  catch(ex){
    console.log(ex)
  }
};

module.exports = syncAndSeed;