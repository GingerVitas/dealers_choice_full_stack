const express = require('express');
const app = express();
const syncAndSeed = require('./database/syncAndSeed');
const path = require('path')

app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use('/api/movies', require('./routes/movies'));
app.use('/api/movie', require('./routes/movie'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')))

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