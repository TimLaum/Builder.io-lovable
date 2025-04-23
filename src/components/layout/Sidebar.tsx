import React from "react";
import SidebarHeader from "../sidebar/SidebarHeader";
import SidebarNavigation from "../sidebar/SidebarNavigation";
import UserProfile from "../sidebar/UserProfile";

const Sidebar: React.FC = () => {
  return (
    <div className="w-[18%] max-md:w-full max-md:ml-0">
      <div className="bg-white shadow-[0px_1px_2px_rgba(95,74,46,0.08)] relative grow w-full px-3 py-5">
        <div className="z-0 flex w-full flex-col overflow-hidden items-stretch justify-center flex-1">
          <SidebarHeader />
          <div className="w-full flex-1 mt-5">
            <div className="border min-h-px w-full border-[rgba(0,0,0,0.1)] border-solid" />
            <SidebarNavigation />
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a108f9e4b68b386cde9aebd142750e6251631f3f?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 absolute z-0 h-6 rounded-full -right-3 top-5"
          alt="Notification"
        />
      </div>
    </div>
  );
};

export default Sidebar;
