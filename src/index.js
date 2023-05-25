import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AboutPage from './components/AboutPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.render (
  <BrowserRouter>
    <Routes>
      <Route path="movie-app" element={<App />}/> 
      <Route path="about" element={<AboutPage />}/>
      </Routes>
  </BrowserRouter>
  ,  document.getElementById('root')
);



