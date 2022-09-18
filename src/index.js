import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import { Home } from './components/Home';
import { CreateReservation } from './components/CreateReservation';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-reservation" element={<CreateReservation/>}/>
        <Route path="/second-step" element={<CreateReservation/>}/>
      </Routes>
    </BrowserRouter>

);
