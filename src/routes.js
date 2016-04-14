import React from 'react'
import { Route } from 'react-router'
import App from './homepage/container/App'
import LocationPage from './location/container/LocationPage'

export default (
  <Route path="/" component={App}>
    <Route path="/:name"
           component={LocationPage} />
  </Route>
)
