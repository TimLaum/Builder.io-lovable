
import React from "react";
import Header from "../dashboard/Header";
import QuickActions from "../dashboard/QuickActions";
import LatestActivity from "../dashboard/LatestActivity";
import DiscoverSection from "../dashboard/DiscoverSection";
import FloatingButton from "../ui/FloatingButton";

const MainContent: React.FC = () => {
  return (
    <div className="w-[82%] ml-5 max-md:w-full max-md:ml-0">
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

