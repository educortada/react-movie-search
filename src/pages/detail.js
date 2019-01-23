import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ButtonBackToHome} from '../components/buttonBackToHome.js'

const API_KEY = '12b5bd95'

export class Detail extends Component{
  
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie({id}){
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(respuesta => respuesta.json())
      .then(movieInfo => {
        console.log({movieInfo})
        this.setState({movie: movieInfo} );
      })
  }

  componentDidMount(){
    console.log(this.props)
    const { movieId } = this.props.match.params
    this._fetchMovie({ id: movieId })
  }

  render(){
    const {Title, Poster, Actors, Plot, imdbRating} = this.state.movie
    return(
      <div className="container">
        <div className="columns">
          <div className="column">
            <img src={Poster}  alt={Title} />
          </div>
          <div className="column is-two-thirds has-text-left-desktop">
            <h1 className="title is-4">{Title}</h1>
            <h2 className="subtitle is-6 has-text-grey is-italic">{Actors}</h2>
            <div className="tag is-warning has-margin-vertical-medium">Rating: {imdbRating}</div>
            <h3 className="has-text-grey-dark">{Plot}</h3>
            <ButtonBackToHome />
          </div>
        </div>
      </div>
    )
  }
}