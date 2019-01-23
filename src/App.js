import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/home.js'
import { Detail } from './pages/detail.js'
import { NotFound } from './pages/notFound.js'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  render() {
    // Route manual
    // const url = new URL(document.location)
    // const hasId =url.searchParams.has('id')
    // const page = hasId 
    //   ? <Detail id={url.searchParams.get('id')} /> 
    //   : <Home />
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:movieId' component={Detail} />
            {/* The last Route will be loaded if the Routes before don't match the path */}
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
