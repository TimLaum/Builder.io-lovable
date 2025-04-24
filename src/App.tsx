
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreativeFatigue from "./pages/CreativeFatigue";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CreativeFatigue />} />
    </Routes>
  );
};

export default App;
