import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Clock} from './components/Clock.js'
import {SimpleTimer} from './components/SimpleTimer.js'
import {LoginForm} from './components/LoginForm.js'
import {Header}  from './components/Header.js'
import {MainRouter} from './components/MainRouter'
import {Main} from './components/Main'

import {
  Route,
  Switch,
  Router,
  BrowserRouter,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"
    
const testElem = <h2>Testing components</h2>

// function App() {
// return (
  
  
// );
// }

const App = () => (
  <div>
    <Main />
  </div>
)

export default App;
