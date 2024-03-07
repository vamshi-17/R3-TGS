import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
// import '../css/bootstrap.css'
// import '../css/bootstrap.min.css';
// import '../css/custom_styles.css';


import LoginPage from '../Pages/LoginPage/LoginPage';
import SearchPage from '../Pages/SearchPage/SearchPage';
import R3IndexPage from '../Pages/R3Page/R3Page';

function App() {

  const isLoggedIn = true; 

  return (
    <div className="App">
        <Routes>
          {/* <Route path='/' element={isLoggedIn ? <Navigate to="/search" /> : <LoginPage />} /> */}
          <Route path='/' element={<LoginPage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="/search" element={isLoggedIn ? <SearchPage /> : <Navigate to="/login" />} />
          <Route path="/r3index" element={isLoggedIn ? <R3IndexPage /> : <Navigate to="/login" />} />
          {/* Redirect users trying to access any other path to the SearchPage or LoginPage depending on the login state */}
          <Route path="*" element={isLoggedIn ? <Navigate to="/search" /> : <Navigate to="/login" />} />
        </Routes>
      {/* <LoginPage/> */}
      {/* <SearchPage/> */}
    </div>
  );
}

export default App;
