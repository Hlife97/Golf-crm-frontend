import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import MyComponent from '../src/MyComponent'
import Login from '../components/signin/Signin'

<Router>
  <Route path='/signin' component={Login} />;
  <PrivateRoute path='onlyAuthorizedAllowedHere' component={MyComponent} />
</Router>;