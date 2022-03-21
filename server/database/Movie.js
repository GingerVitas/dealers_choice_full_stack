const db = require('./db');
const Sequelize = require('sequelize');
const genres = ['Drama', 'Crime', 'Action', 'Adventure', 'Fantasy', 'Biography', 'History', 'Sci-Fi', 'Romance', 'Rom-Com', 'Western', 'Family', 'Animation', 'Musical', 'Thriller', 'Horror', 'Comedy', 'Mystery']
const ratings = ['G', 'PG', 'PG-13', 'R', 'X', 'Unrated'];
const streamingServices = ['Showtime', 'Netflix', 'HBO Max', 'Amazon Prime', 'Hulu', 'PeacockTV', 'Paramount+', 'Disney+', 'Unavailable to Stream']

const Movie = db.define('movie', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  releaseYear: {
    type: Sequelize.INTEGER
  },
  genre: {
    type: Sequelize.ENUM(genres)
  },
  runTime: {
    type: Sequelize.INTEGER
  },
  rating: {
    type: Sequelize.ENUM(ratings)
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  director: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  streamingService: {
    type: Sequelize.ENUM(streamingServices),
    allowNull: false,
    defaultValue: 'Unavailable to Stream'
  },
  boxArt: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    },
    defaultValue: 'https://ih1.redbubble.net/image.1030805420.6483/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg',
  }
});

module.exports = Movie