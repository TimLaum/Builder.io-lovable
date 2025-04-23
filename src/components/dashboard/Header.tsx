import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex w-full items-stretch justify-between max-md:max-w-full">
      <div className="flex min-w-60 w-full justify-between h-full flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
          <h1 className="text-[#19194D] text-[28px] font-bold leading-none">
            Home
          </h1>
          <p className="text-[#5B5B6F] text-base font-medium mt-2 max-md:max-w-full">
            Here's everything you need to manage your campaigns efficiently
            today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
