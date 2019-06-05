import React, {Component} from 'react'
import {Router, Route} from 'react-router-dom'

import App from '../containers/index.jsx'
import SubRouter from './SubRouter.jsx'

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

export default class AppRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history={customHistory}>
        <App>
          <Route path="/" component={SubRouter} />
        </App>
      </Router>
    )
  }
}