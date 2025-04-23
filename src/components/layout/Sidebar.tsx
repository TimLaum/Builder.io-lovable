
import React from "react";
import { useSidebar } from "../../contexts/SidebarContext";
import SidebarHeader from "../sidebar/SidebarHeader";
import SidebarNavigation from "../sidebar/SidebarNavigation";
import UserProfile from "../sidebar/UserProfile";

const Sidebar: React.FC = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <div className={`${isOpen ? 'translate-x-0' : '-translate-x-[280px]'} fixed left-0 w-[100%] transition-transform duration-300 max-[1024px]:top-0 max-[1024px]:h-screen max-[1024px]:z-50`}>
      <div className="bg-white shadow-[0px_1px_2px_rgba(95,74,46,0.08)] relative w-[280px] h-full px-3 py-5">
        <div className="z-0 flex w-full flex-col overflow-hidden items-stretch justify-center flex-1">
          <SidebarHeader />
          <div className="w-full flex-1 mt-5">
            <div className="border min-h-px w-full border-[rgba(0,0,0,0.1)] border-solid" />
            <SidebarNavigation />
          </div>
        </div>
      </div>
      <button 
        onClick={toggle}
        className="absolute z-10 top-5 right-[-18px] w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-shadow"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a108f9e4b68b386cde9aebd142750e6251631f3f?placeholderIfAbsent=true"
          className={`w-4 h-4 object-contain ${isOpen ? '' : 'transform rotate-180'}`}
          alt="Toggle sidebar"
        />
      </button>
    </div>
  );
};

export default Sidebar;
