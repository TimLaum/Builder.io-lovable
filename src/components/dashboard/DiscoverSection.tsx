import React from "react";
import DiscoverCard from "./DiscoverCard";

const DiscoverSection: React.FC = () => {
  const discoverItems = [
    {
      color: "rgba(220,252,231,0.35)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ea11ece6bbbceb401b6d75579583faeaaa14ada6?placeholderIfAbsent=true",
      title: "Getting started with Boards",
      duration: "2 min video",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/506123ccc7162b61030e5bb3a05922a4baf8b6eb?placeholderIfAbsent=true",
    },
    {
      color: "rgba(224,242,254,0.35)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/019484bec7efb37b035eb61ecec16268ec568a85?placeholderIfAbsent=true",
      title: "Understanding reports",
      duration: "4 min video",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cbf00f33b3df143fab9403ee0551950e6869e3e8?placeholderIfAbsent=true",
    },
    {
      color: "rgba(255,237,213,0.35)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4f3f055e09f3c80cce6fdc784d2b513ff20155e3?placeholderIfAbsent=true",
      title: "Top creative report explained",
      duration: "5 min video",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bf97b615d194e4429e73f4388d8f9d11fc02452?placeholderIfAbsent=true",
    },
    {
      color: "rgba(243,232,255,0.35)",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1174b731b03d4be242e0aae748d5ad35aed841f3?placeholderIfAbsent=true",
      title: "Mapping your landing pages",
      duration: "4 min video",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/910994c1311d961abc23fb9716a7a6deb147330e?placeholderIfAbsent=true",
    },
  ];

  return (
    <div className="w-full mt-10 max-md:max-w-full">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <h2 className="text-[#19194D] text-base font-bold leading-none self-stretch my-auto">
          Discover our app{" "}
        </h2>
        <div className="self-stretch flex gap-3 my-auto">
          <button className="bg-[rgba(243,245,247,1)] flex min-h-8 items-center gap-2 justify-center w-8 h-8 px-[7px] rounded-[50px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a41e87936ce9229f1dc5da642f2d7f44e0317b7?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[18px] self-stretch my-auto"
              alt="Filter"
            />
          </button>
          <button className="bg-[rgba(243,245,247,1)] flex min-h-8 items-center gap-2 justify-center w-8 h-8 px-[7px] rounded-[50px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37df9713cd7d7e749907575b93ffde42fbbf106e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[18px] self-stretch my-auto"
              alt="Sort"
            />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto flex w-full gap-6 mt-4 max-md:max-w-full">
        {discoverItems.map((item, index) => (
          <DiscoverCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;
