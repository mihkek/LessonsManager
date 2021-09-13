import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Clock} from './components/Clock.js'
import {SimpleTimer} from './components/SimpleTimer.js'
import {LoginForm} from './components/LoginForm.js'

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

const testElem = <h2>Testing components</h2>

function App(props) {

  //Getting data from back-app. IMPORTATNT! DONT DELETE IT!
  const [data, setData] =  useState(null)

  useEffect(() => {
      fetch("testReact")
      .then(response => response.json())
      .then(response => setData(response.message))
  }, [])


  return (
    <div className>
       
        <LoginForm />
        {/* {testElem}
        {props.test}
        <Clock />
        <SimpleTimer increment = {1} /> */}
        {/* <p>
          {
            !data ? "Loading" : data
          }
          </p> */}
    </div>
  );
}

export default App;
