import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import GetAplication from './routes/GetAplication';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='get-aplication' element={<GetAplication />} /> 
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
