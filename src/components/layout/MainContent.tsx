
import React from "react";
import { useSidebar } from "../../contexts/SidebarContext";
import Header from "../dashboard/Header";
import QuickActions from "../dashboard/QuickActions";
import LatestActivity from "../dashboard/LatestActivity";
import DiscoverSection from "../dashboard/DiscoverSection";
import FloatingButton from "../ui/FloatingButton";

const MainContent: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className={`${isOpen ? 'ml-5' : 'ml-0'} flex-1 transition-all duration-300 max-lg:w-full max-lg:ml-0`}>
      <div className="flex grow flex-col items-stretch pb-6 max-md:max-w-full">
        <div className="overflow-hidden pt-8 pb-5 px-8 max-md:max-w-full max-md:px-5">
          <div className="bg-white w-full overflow-hidden p-6 rounded-lg max-md:max-w-full max-md:px-5">
            <Header />
            <QuickActions />
            <LatestActivity />
            <DiscoverSection />
          </div>
        </div>
        <div className="flex justify-end pr-6 -mt-20">
          <FloatingButton />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
