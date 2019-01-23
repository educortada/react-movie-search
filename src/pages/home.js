import React, { Component } from 'react'
import { Title } from '../components/Title.js';
import { SearchForm } from '../components/searchForm.js'
import { MoviesList } from '../components/moviesList.js'

export class Home extends Component{
  
  state = { usedSearch: false, results: [] }

  _renderResults(){
    return(
      this.state.results.length === 0
      ?  <p>Sorry! <span role="img" aria-label="Pensive">😔</span> Results not found!</p> 
      : <MoviesList movies={this.state.results} />
    )
  }
  
  render(){
    return(
      <div>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={ (search) => this.setState({results: search, usedSearch: true}) } />
        </div>
        {this.state.usedSearch
          ? this._renderResults()
          : <small>Use the form to search a movie</small>
        }
      </div>
    )
  }
}