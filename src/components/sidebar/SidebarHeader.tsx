import React from "react";

const SidebarHeader: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-stretch text-sm text-[#0D0D26] font-semibold leading-none justify-center">
      <div className="flex min-h-[22px]" />
      <div className="bg-[rgba(247,247,247,1)] flex min-h-12 w-full items-center gap-[40px_58px] justify-between mt-4 px-3 py-2.5 rounded-lg">
        <div className="self-stretch flex items-center gap-2 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c3098c2902af0176e7804edd4699606f4acd65f?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-7 self-stretch shrink-0 my-auto rounded-md"
            alt="Agency logo"
          />
          <div className="self-stretch my-auto">Agence Intuition</div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f995d3c0b029b81f916d2986f3d17c828006e48?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
          alt="Dropdown"
        />
      </div>
    </div>
  );
};

export default SidebarHeader;
