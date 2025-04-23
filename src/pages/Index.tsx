
import React from "react";
import { SidebarProvider } from "../contexts/SidebarContext";
import Sidebar from "../components/layout/Sidebar";
import MainContent from "../components/layout/MainContent";

const Index: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="bg-[#EDF3FF]">
        <div className="flex max-lg:flex-col max-lg:items-stretch">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
