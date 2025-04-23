import React from "react";

const UserProfile: React.FC = () => {
  return (
    <div className="flex w-full items-center gap-[40px_80px] font-semibold justify-between mt-4 pl-[11px] pr-2 py-1">
      <div className="self-stretch flex items-center gap-2 my-auto">
        <div className="bg-[rgba(179,62,237,1)] border self-stretch overflow-hidden text-xs text-white whitespace-nowrap text-center w-7 h-7 my-auto px-[13px] rounded-[874px] border-white border-solid">
          J
        </div>
        <div className="self-stretch text-sm text-[#171718] my-auto">
          Jérémy Martin
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dfa3b76c64de9c3cbaca34e729003a612e64314?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
        alt="Settings"
      />
    </div>
  );
};

export default UserProfile;
