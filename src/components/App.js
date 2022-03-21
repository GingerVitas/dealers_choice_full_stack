import React from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
import {loadMovies} from '../store/movieStore';
import {connect} from 'react-redux';
import Nav from './Nav';
import MovieList from './MovieList'

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
            <h1>ACME Movie Database</h1>
            <h3>Your personalized destination for movie info</h3>
          </div>
          <nav>
            <Nav />
          </nav>
          <div>
            <Route path='/movies' component={MovieList} />
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