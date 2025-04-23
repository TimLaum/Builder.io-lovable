
import React from "react";
import { useSidebar } from "../../contexts/SidebarContext";
import SidebarHeader from "../sidebar/SidebarHeader";
import SidebarNavigation from "../sidebar/SidebarNavigation";
import UserProfile from "../sidebar/UserProfile";

const Sidebar: React.FC = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <div className={`${isOpen ? 'w-[280px]' : 'w-0'} overflow-hidden transition-all duration-300 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-screen max-lg:z-50`}>
      <div className="bg-white shadow-[0px_1px_2px_rgba(95,74,46,0.08)] relative grow w-[280px] h-full px-3 py-5">
        <div className="z-0 flex w-full flex-col overflow-hidden items-stretch justify-center flex-1">
          <SidebarHeader />
          <div className="w-full flex-1 mt-5">
            <div className="border min-h-px w-full border-[rgba(0,0,0,0.1)] border-solid" />
            <SidebarNavigation />
          </div>
        </div>
        <button 
          onClick={toggle}
          className="absolute z-10 top-5 -right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a108f9e4b68b386cde9aebd142750e6251631f3f?placeholderIfAbsent=true"
            className="w-4 h-4 object-contain"
            alt="Toggle sidebar"
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
