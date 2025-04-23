import React from "react";
import ActionCard from "./ActionCard";

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97309061eedf64344c870018ca4fa957b5faa6f4?placeholderIfAbsent=true",
      title: "Create new board",
      description: "Start organizing your campaigns into actionable boards.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2688fd085deeb27e09b40c9746fadecd0b25e14?placeholderIfAbsent=true",
      title: "Create new report",
      description:
        "Generate detailed insights from your campaigns with customizable reports.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6a7453130c70318c50dba36d49a647ce07394c9?placeholderIfAbsent=true",
      title: "Manage ad accounts",
      description: "Connect new ad accounts or update existing ones.",
    },
  ];

  return (
    <div className="flex w-full flex-col items-stretch mt-10 max-md:max-w-full">
      <h2 className="text-base text-[#19194D] font-bold leading-none">
        Quick actions
      </h2>
      <div className="w-full mt-4 max-md:max-w-full">
        <div className="flex w-full gap-5 flex-wrap max-md:max-w-full">
          {actions.map((action, index) => (
            <ActionCard
              key={index}
              icon={action.icon}
              title={action.title}
              description={action.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
