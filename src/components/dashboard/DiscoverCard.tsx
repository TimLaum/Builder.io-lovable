import React from "react";

interface DiscoverCardProps {
  item: {
    color: string;
    image: string;
    title: string;
    duration: string;
    icon: string;
  };
}

const DiscoverCard: React.FC<DiscoverCardProps> = ({ item }) => {
  return (
    <div
      className="min-w-60 overflow-hidden w-[310px] rounded-[10px]"
      style={{ backgroundColor: item.color }}
    >
      <div className="flex max-w-full w-[310px] flex-col items-center justify-center px-[31px] py-[11px] max-md:px-5">
        <img
          src={item.image}
          className="aspect-[1] object-contain w-32 max-w-full"
          alt={item.title}
        />
      </div>
      <div className="bg-white w-full p-4">
        <h3 className="text-[#171718] text-base font-semibold leading-none">
          {item.title}
        </h3>
        <div className="flex w-full items-center gap-2 text-sm text-[#5B5B6F] font-medium leading-none mt-2">
          <img
            src={item.icon}
            className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto"
            alt="Video icon"
          />
          <div className="self-stretch my-auto">{item.duration}</div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
