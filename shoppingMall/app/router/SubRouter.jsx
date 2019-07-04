import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import RoutePath from './routePath.js'

import Home from '../containers/Home/index.jsx'
import User from '../containers/User/index.jsx'
import City from '../containers/City/index.jsx'
import Login from '../containers/Login/index.jsx'
import Search from '../containers/Search/index.jsx'
import Detail from '../containers/Detail/index.jsx'
import NotFound from '../containers/404.jsx'

export default class SubRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {root,city,login,user,search,detail} = RoutePath
    return (
      <Switch>
        <Route exact path={'root'} component={Home}/>
        <Route path={city} component={City}/>
        <Route path={login} component={Login}/>
        <Route path={user} component={User}/>
        <Route path={search} component={Search}/>
        <Route path={detail} component={Detail}/>
        <Route component={Home}/>
      </Switch>
    )
  }
}