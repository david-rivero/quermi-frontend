import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Login,
  Register,
  Calendar,
  ChatInbox,
  ChatSession,
  NoSession,
  Dashboard,
  ProfileMe,
  ProfileReport,
  RateProfile,
  ProfileSearch,
  Settings,
  Payments,
  Account,
  Contracts,
  Help,
  TasksList,
  TaskRequest,
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/me" element={<ProfileMe />} />
        <Route path="/profile/report" element={<ProfileReport />} />
        <Route path="/profile/:profileId/rate" element={<RateProfile />} />
        <Route path="/profile/lookup" element={<ProfileSearch />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/payments" element={<Payments />} />
        <Route path="/settings/account" element={<Account />} />
        <Route path="/settings/contracts" element={<Contracts />} />
        <Route path="/help" element={<Help />} />
        <Route path="/tasks" element={<TasksList />} />
        <Route path="/tasks/request" element={<TaskRequest />} />
        <Route path="/" element={<NoSession />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
