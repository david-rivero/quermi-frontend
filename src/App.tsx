import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login, Register } from './views';

import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register/:stepId" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
