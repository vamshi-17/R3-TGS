import React from 'react';

import '../css/bootstrap.css'
import '../css/bootstrap.min.css';
import '../css/custom_styles.css';
import './App.css';

import LoginPage from '../Pages/LoginPage/LoginPage';
import SearchPage from '../Pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">

      {/* <LoginPage/> */}
      <SearchPage/>
    </div>
  );
}

export default App;
