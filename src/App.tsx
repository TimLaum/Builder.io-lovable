
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreativeFatigue from "./pages/CreativeFatigue";
import MainContent from "./components/layout/MainContent";
import { SidebarProvider } from "./contexts/SidebarContext";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <SidebarProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/creative-fatigue" element={<CreativeFatigue />} />
      </Routes>
    </SidebarProvider>
  );
};

export default App;
