import React from 'react';
import {addMovie} from '../store/moviesStore';
import {connect} from 'react-redux';

class MovieForm extends React.Component{
  constructor(){
    super()
    this.state = {
      boxArt: '',
      title: '',
      description: '',
      releaseYear: 1990,
      genre: '',
      rating: '',
      director: '',
      streamingService: '',
      runTime: 100
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(ev){
    ev.preventDefault();
    this.props.addMovie(this.state)
  };

  handleChange(ev){
    this.setState({
      [ev.target.name]: ev.target.value
    })
  };

  render() {
    const {boxArt, title, description, releaseYear, genre, rating, director, streamingService, runTime} = this.state;
    const {handleSubmit, handleChange } = this;
    const genres = this.props.movies.reduce((genreArr, movie) => {
      if(!genreArr.includes(movie.genre)) {
        genreArr.push(movie.genre)
      }
      return genreArr;
    }, []);
    const streamers = this.props.movies.reduce((streamerArr, movie) => {
      if(!streamerArr.includes(movie.streamingService)) {
        streamerArr.push(movie.streamingService)
      }
      return streamerArr;
    }, [])
    const ratings = this.props.movies.reduce((ratingArr, movie) => {
      if(!ratingArr.includes(movie.rating)) {
        ratingArr.push(movie.rating)
      }
      return ratingArr;
    }, [])


    return(
      <div className='formContainer'>
        <form id='addMovieForm' onSubmit={handleSubmit}>
          <input name='title' value={title} onChange={handleChange} placeholder='Movie Title' />

          <input name='director' value={director} onChange={handleChange} placeholder='Director Name' />
          <input name='releaseYear' value={releaseYear} onChange={handleChange} placeholder='Release Year' />
          <input name='runTime' value={runTime} onChange={handleChange} placeholder='Movie Run Time' />
          <input name='description' value={description} onChange={handleChange} placeholder='Movie Description' />
          <input name='boxArt' value={boxArt} onChange={handleChange} placeholder='Box Art URL' />

          <select name='genre' value={genre} onChange={handleChange}>
            <option value=''>--Select a Genre--</option>
            { genres.map(genre => (
              <option value={genre} key={genre}>{genre}</option>
            )) }
          </select>

          <select name='streamingService' value={streamingService} onChange={handleChange}>
            <option value=''>-- Select a Streaming Service --</option>
            { streamers.map(streamer => (
              <option value={streamer} key={streamer}>{streamer}</option>
            )) }
          </select>

          <select name='rating' value={rating} onChange={handleChange}>
            <option value=''>--Select a Rating--</option>
            { ratings.map(rating => (
              <option value={rating} key={rating}>{rating}</option>
            )) }
          </select>

          <button type='submit'>Add Your Movie!</button>
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    addMovie: (movie) => dispatch(addMovie(movie, history))
  }
}

export default connect(state=>state, mapDispatchToProps)(MovieForm)
