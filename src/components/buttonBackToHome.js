import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonBackToHome = () => (
  <div className="has-margin-vertical-medium">
    <Link className="button is-info" to='/'>Back home</Link>
  </div>
)