
import React from "react";
import { SidebarProvider } from "../contexts/SidebarContext";
import Sidebar from "../components/layout/Sidebar";
import MainContent from "../components/layout/MainContent";

const Index: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="bg-[#EDF3FF]">
        <div className="flex max-[1024px]:flex-col max-[1024px]:items-stretch">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
