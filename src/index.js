import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './register.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './logins.js';
import Dashboard from './Dashboard.js';
import UploadFile from './uploadFile.js';
import Otp from './otp.js';
import Updatepass from './updatepass.js';
import Email from './email.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/uploadfile' element={<UploadFile />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/email' element={<Email />} />
        <Route path='/resetpass' element={<Updatepass />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
