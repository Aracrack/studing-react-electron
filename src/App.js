import React from 'react';
import api from './services/api'
import Routes from './route'

import Header from './components/Header'
import Main from './pages/main'

import './styles.css'

const App = () => (
  <Routes>
  <div className="App">
    <Header />
    <Main />
  </div>
  </Routes>
)

export default App;
