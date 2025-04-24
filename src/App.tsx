
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreativeFatigue from "./pages/CreativeFatigue";
import MainContent from "./components/layout/MainContent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/creative-fatigue" element={<CreativeFatigue />} />
    </Routes>
  );
};

export default App;
