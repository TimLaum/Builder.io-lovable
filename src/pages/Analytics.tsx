
import React from "react";
import { SidebarProvider } from "../contexts/SidebarContext";
import Sidebar from "../components/layout/Sidebar";
import AnalyticsContent from "../components/analytics/AnalyticsContent";

const Analytics: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="bg-[#EDF3FF]">
        <div className="flex max-[1024px]:flex-col max-[1024px]:items-stretch">
          <Sidebar />
          <AnalyticsContent />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;
