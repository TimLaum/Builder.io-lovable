import React, { ReactNode } from "react";

interface SidebarSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div
      className={`w-full text-sm text-[#0D0D26] font-medium leading-none ${className}`}
    >
      <div className="self-stretch w-full gap-2 text-xs text-[#707088] font-semibold whitespace-nowrap uppercase pl-4 pr-5 py-2">
        {title}
      </div>
      {children}
    </div>
  );
};

export default SidebarSection;
