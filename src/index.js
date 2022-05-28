import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/UI/navbar';
import { FoodBoxApp } from './FoodBoxApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <FoodBoxApp />
  </BrowserRouter>

);
