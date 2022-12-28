import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from '../../pages/PageNotFound';
import Login from '../../pages/Login';

function AppRouter() {
  return (
    <Router>
     <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </Router>
  )
}

export default AppRouter