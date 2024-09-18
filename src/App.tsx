import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Login,
  Register,
  Calendar,
  ChatInbox,
  ChatSession,
} from './views';

import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register/:stepId" element={<Register />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/chat/inbox" element={<ChatInbox />} />
        <Route path="/chat/session/:chatId" element={<ChatSession />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
