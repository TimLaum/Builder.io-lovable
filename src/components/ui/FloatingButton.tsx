import React from "react";

const FloatingButton: React.FC = () => {
  return (
    <button
      className="justify-center items-center shadow-[0px_2px_8px_0px_rgba(0,0,0,0.20)] bg-[linear-gradient(179deg,#6E84FE_-39.47%,#5C68F8_99.3%)] z-10 flex w-14 flex-col h-14 mr-6 -mt-20 px-3 rounded-[50px] max-md:mr-2.5"
      aria-label="Add new"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/281ee50a49a90b95d402e806ebcc4e9bebe8c96b?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-full"
        alt="Add"
      />
    </button>
  );
};

export default FloatingButton;
