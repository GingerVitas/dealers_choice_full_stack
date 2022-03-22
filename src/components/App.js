import React from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
import {loadMovies} from '../store/movieStore';
import {connect} from 'react-redux';
import Nav from './Nav';
import MovieList from './MovieList';
import Movie from './Movie';


class App extends React.Component {
  componentDidMount() {
    const {loadMovies} = this.props;
    loadMovies()
  }

  render() {


    return (
      <HashRouter>
        <div>
          <div>
            <Link to='/'><h1>ACME Movie Database</h1></Link>
          </div>
          <nav>
            <Nav />
          </nav>
          <div className='renderContainer'>
            <Route path='/movies' component={MovieList} />
            <Route exact path='/movie/:id' component={Movie} />
          </div>
        </div>
      </HashRouter>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: () => dispatch(loadMovies())
  }
}


export default connect(state=>state, mapDispatchToProps)(App)