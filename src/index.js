import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import { Home } from './components/Home';
import { CreateReservation } from './components/CreateReservation';
import { SecondStep } from './components/SecondStep';
import { ThirdStep } from './components/ThirdStep';
import { LastStep } from './components/LastStep';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-reservation" element={<CreateReservation/>}/>
        <Route path="/second-step" element={<SecondStep/>}/>
        <Route path="/third-step" element={<ThirdStep/>}/>
        <Route path="/last-step" element={<LastStep/>}/>
      </Routes>
    </BrowserRouter>

);
