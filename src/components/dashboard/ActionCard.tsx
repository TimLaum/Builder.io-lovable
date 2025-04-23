import React from "react";

interface ActionCardProps {
  icon: string;
  title: string;
  description: string;
}

const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-50 flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] p-5 rounded-lg">
      <div className="flex flex-col items-stretch justify-center">
        <div className="items-center bg-[#EDF3FF] flex w-[34px] gap-2 h-[34px] p-2 rounded-lg border-[0.5px] border-solid border-[rgba(255,255,255,0.10)]">
          <img
            src={icon}
            className="aspect-[1] object-contain w-[18px] self-stretch my-auto"
            alt={title}
          />
        </div>
        <h3 className="text-[#25252D] text-base font-bold leading-none mt-3">
          {title}
        </h3>
      </div>
      <p className="text-[#5B5B6F] text-sm font-medium leading-5 mt-2">
        {description}
      </p>
    </div>
  );
};

export default ActionCard;
