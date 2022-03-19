const express = require('express');
const app = express();
const syncAndSeed = require('./database/syncAndSeed');

app.use('/api/movies', require('./routes/movies'));


const init = async() => {
  try{
    await syncAndSeed()
    const port = process.env.PORT || 3210
    app.listen(port, ()=> console.log(`Listening on port ${port}`));
  }
  catch(ex){
    console.log(ex)
  }
}

init();