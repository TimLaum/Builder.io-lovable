import React from "react";

interface SidebarItemProps {
  icon?: string;
  label: string;
  active?: boolean;
  indented?: boolean;
  hasDropdown?: boolean;
  dropdownIcon?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active = false,
  indented = false,
  hasDropdown = false,
  dropdownIcon,
}) => {
  const baseClasses = active
    ? "justify-between items-center bg-[#EDF3FF] flex w-full text-sm text-[#0D0D26] font-medium whitespace-nowrap leading-none pl-4 pr-5 py-2 rounded-lg"
    : hasDropdown
      ? "flex w-full items-center gap-[40px_50px] justify-between mt-1 pl-4 pr-2 py-2 rounded-lg"
      : indented
        ? "flex w-full items-center gap-9 leading-none mt-1 pl-7 pr-2 py-2 max-md:pl-5"
        : "flex w-full items-center gap-9 text-sm text-[#0D0D26] font-medium leading-none mt-1 pl-4 pr-2 py-2";

  return (
    <div className={baseClasses}>
      {hasDropdown ? (
        <>
          <div className="self-stretch gap-2 my-auto">{label}</div>
          {dropdownIcon && (
            <img
              src={dropdownIcon}
              className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
              alt="Dropdown"
            />
          )}
        </>
      ) : (
        <div className="self-stretch flex items-center gap-2 my-auto">
          {icon && (
            <img
              src={icon}
              className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
              alt="Icon"
            />
          )}
          <div className="self-stretch my-auto">{label}</div>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
