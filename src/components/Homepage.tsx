
import React from "react";
import Sidebar from "./layout/Sidebar";
import MainContent from "./layout/MainContent";

const Homepage: React.FC = () => {
  return (
    <div className="bg-[#EDF3FF]">
      <div className="flex max-lg:flex-col max-lg:items-stretch">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Homepage;
