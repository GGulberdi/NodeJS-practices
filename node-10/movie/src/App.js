import './App.css';
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Header from './conponents/Header';
import { Route } from 'react-router-dom'

import Footer from './conponents/Footer';
import MoviesPage from './conponents/pages/MoviesPage'
import NewMoviesPage from './conponents/pages/NewMoviesPage'



class App extends Component {

  render() {

    return (
      <div>

        <Header />
        <Container text>
          <Route path='/movies' exact component={MoviesPage}></Route>
          <Route path='/movies/new' exact component={NewMoviesPage}></Route>

        </Container>
        <Footer />

      </div>
    );
  }
}

export default App;


