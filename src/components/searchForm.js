
import React, { Component } from 'react'

const API_KEY = '12b5bd95'

export class SearchForm extends Component{
  
  state = {
    inputMovie: '',
  }

  _handleChange = (event) => {
    this.setState({ inputMovie: event.target.value})
  }

  _handleSubmit = (event) => {
    event.preventDefault()
    // Object destructuring:
    // const inputMovie = this.state.inputMovie
    const {inputMovie} = this.state
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(respuesta => respuesta.json())
      .then(results => {
        // Object destructuring with default values ([] and '0') when the value is undefined.
        const {Search = [], totalResults = '0'} = results
        console.log({Search, totalResults})
        this.props.onResults(Search)
      })
  }
  
  render(){
    return(
      <form onSubmit={this._handleSubmit}> 
        <div className="field has-addons">
          <div className="control">
            <input className="input" onChange={this._handleChange} type="text" placeholder="Movie" />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    )
  }
}