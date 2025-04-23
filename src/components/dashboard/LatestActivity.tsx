
import React from "react";
import ActivityCard from "./ActivityCard";

const LatestActivity: React.FC = () => {
  const activities = [
    {
      type: "creative" as const,
      title: "Top creative",
      subtitle: "13 ads reviewed",
      time: "24 min ago",
      user: {
        initial: "T",
        name: "Thomas Collaudin",
        color: "rgba(237,184,62,1)",
      },
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a07407ea4c268e40c027ce1ecc5f699e7863ccb0?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e26acb5a42babc0106490ed335e2271590bc0071?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/546ff34880df5ba66715b985d453ccba5d99423c?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2006810ac4754f1b6c963df7fd8e291db39f1c0d?placeholderIfAbsent=true",
      ],
      hasButton: true,
    },
    {
      type: "reports" as const,
      title: "Weekly reports",
      subtitle: "5 reports available",
      time: "51 min ago",
      user: {
        initial: "J",
        name: "Julien Bosse",
        color: "rgba(79,185,234,1)",
      },
      images: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/580b8f6e0abd7a856158d5eab9239ca836880806?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5047d685b591dcb2ad09faf5a65fa7b687c69af2?placeholderIfAbsent=true",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/000dfee8ee2257e100430df463bc5a2e6cdd88eb?placeholderIfAbsent=true",
      ],
    },
    {
      type: "chart" as const,
      title: "Top performing",
      subtitle: "28 ads reviewed",
      time: "2 hours ago",
      user: {
        initial: "T",
        name: "Thomas Collaudin",
        color: "rgba(237,184,62,1)",
      },
      buttonText: "Report",
      buttonIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aeed88819f3f5e32bc5b956a3b48658ec3940489?placeholderIfAbsent=true",
    },
    {
      type: "chart" as const,
      title: "Top campaigns",
      subtitle: "7 ads reviewed",
      time: "5 hours ago",
      user: {
        initial: "M",
        name: "Maxime Brevet",
        color: "rgba(62,63,237,1)",
      },
      buttonText: "Report",
      buttonIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/68fbf483c585884a6bffdeef39c731232603bd8d?placeholderIfAbsent=true",
    },
  ];

  return (
    <div className="w-full mt-10 max-md:max-w-full">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <h2 className="text-[#19194D] text-base font-bold leading-none self-stretch my-auto">
          Latest activity
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
        {activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default LatestActivity;
