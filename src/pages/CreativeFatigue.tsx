
import React from "react";
import { SidebarProvider } from "../contexts/SidebarContext";
import Sidebar from "../components/layout/Sidebar";
import CreativeFatigueContainer from "./CreativeFatigueContainer";
import FloatingButton from "../components/ui/FloatingButton";

const CreativeFatigue = () => {
  return (
    <SidebarProvider>
      <div className="bg-[#EDF3FF]">
        <div className="flex max-lg:flex-col max-lg:items-stretch">
          <Sidebar />
          <CreativeFatigueContainer />
          <FloatingButton />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CreativeFatigue;
