import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
import ChatPage from './ChatPage'

function RouterPage() {
  return (
    <Router>
      <Routes>
        
      <Route path="/" element={<Login />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/ChatPage" element={<ChatPage />} />
        
      </Routes>
    </Router>
  );
}

export default RouterPage;