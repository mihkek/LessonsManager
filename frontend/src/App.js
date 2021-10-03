import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Main} from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import './constants/Styles/Css/DefaultTheme.css'
import {ConfirmModal} from './components/library/additional/ConfirmWindow'

const App = () => (
  <div>
     <Main />
  </div>
)

export default App;
