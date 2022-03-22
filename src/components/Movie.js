import React from 'react';
import {connect} from 'react-redux';
import {fetchMovie} from '../store/movieStore';

class Movie extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.fetchMovie(id)
  }

  render() {
    const {movie} = this.props
    if (!movie) return null
    return (
      <div className='singleMovieGrid'>
        <div className='singleMovieCard' key={movie.id}>
          <img className='boxImg' src={movie.boxArt} />
          <div className='title'>{movie.title}</div>
          <div className='description'>{movie.description}</div>
          <div className='releaseYear'>Released in {movie.releaseYear}</div>
          <div className='genre'>{movie.genre}</div>
          <div className='rating'>Rated {movie.rating}</div>
          <div className='director'>Directed by {movie.director}</div>
          <div className='streamingService'>Available to stream on {movie.streamingService}</div>
          <div calssName='runTime'>{movie.runTime} minutes</div>
        </div>
      </div>

    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (id) => dispatch(fetchMovie(id))
  }
}

export default connect(state=>state, mapDispatchToProps)(Movie)