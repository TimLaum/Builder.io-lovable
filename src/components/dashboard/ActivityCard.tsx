import React from "react";

interface User {
  initial: string;
  name: string;
  color: string;
}

interface ActivityProps {
  type: "creative" | "reports" | "chart";
  title: string;
  subtitle: string;
  time: string;
  user: User;
  images?: string[];
  hasButton?: boolean;
  buttonText?: string;
  buttonIcon?: string;
}

interface ActivityCardProps {
  activity: ActivityProps;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const renderContent = () => {
    if (activity.type === "creative" && activity.images) {
      return (
        <div className="flex min-h-[92px] items-stretch gap-1">
          <div className="flex flex-col items-stretch justify-center flex-1 shrink basis-[0%]">
            <img
              src={activity.images[0]}
              className="aspect-[1.66] object-contain w-[73px] flex-1 rounded-md"
              alt="Creative preview"
            />
            <img
              src={activity.images[1]}
              className="aspect-[1.75] object-contain w-[91px] flex-1 mt-1 rounded-md"
              alt="Creative preview"
            />
          </div>
          <div className="flex flex-col items-stretch justify-center flex-1 shrink basis-[0%]">
            <img
              src={activity.images[2]}
              className="aspect-[1.64] object-contain w-[72px] flex-1 rounded-md"
              alt="Creative preview"
            />
            <img
              src={activity.images[3] || activity.images[2]}
              className="aspect-[1.64] object-contain w-[72px] flex-1 mt-1 rounded-md"
              alt="Creative preview"
            />
          </div>
          <div className="flex flex-col items-stretch justify-center flex-1 shrink basis-[0%]">
            <img
              src={activity.images[0]}
              className="aspect-[1.66] object-contain w-[73px] flex-1 rounded-md"
              alt="Creative preview"
            />
            <img
              src={activity.images[0]}
              className="aspect-[1.66] object-contain w-[73px] flex-1 mt-1 rounded-md"
              alt="Creative preview"
            />
          </div>
          <div className="flex flex-col items-stretch justify-center flex-1 shrink basis-[0%]">
            <img
              src={activity.images[2]}
              className="aspect-[1.64] object-contain w-[72px] flex-1 rounded-md"
              alt="Creative preview"
            />
            <img
              src={activity.images[2]}
              className="aspect-[1.64] object-contain w-[72px] flex-1 mt-1 rounded-md"
              alt="Creative preview"
            />
          </div>
        </div>
      );
    } else if (activity.type === "reports" && activity.images) {
      return (
        <div className="flex min-h-[92px] items-stretch gap-1">
          <img
            src={activity.images[0]}
            className="aspect-[0.91] object-contain w-[98px] shrink flex-1 basis-[0%] rounded-md"
            alt="Report preview"
          />
          <img
            src={activity.images[1]}
            className="aspect-[1.06] object-contain w-[98px] shrink flex-1 basis-[0%] rounded-md"
            alt="Report preview"
          />
          <img
            src={activity.images[2]}
            className="aspect-[1.06] object-contain w-[98px] shrink flex-1 basis-[0%] rounded-md"
            alt="Report preview"
          />
        </div>
      );
    } else if (activity.type === "chart") {
      return (
        <div className="bg-[rgba(243,245,247,1)] w-full pt-7 px-[21px] rounded-[6px_6px_0px_0px] max-md:px-5">
          <div className="flex gap-4">
            <div className="flex gap-0.5 justify-center">
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[19px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[31px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[26px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[23px] rounded-[1px_1px_0px_0px]" />
            </div>
            <div className="flex gap-0.5 justify-center">
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[38px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[43px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[18px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-4 rounded-[1px_1px_0px_0px]" />
            </div>
            <div className="flex gap-0.5 justify-center">
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[37px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-16 rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[49px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-10 rounded-[1px_1px_0px_0px]" />
            </div>
            <div className="flex gap-0.5 justify-center">
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[23px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[9px] rounded-[1px_1px_0px_0px]" />
            </div>
            <div className="flex gap-0.5 justify-center">
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[51px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[39px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[57px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[30px] rounded-[1px_1px_0px_0px]" />
            </div>
            <div className="flex gap-0.5 justify-center">
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[13px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[43px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-[51px] rounded-[1px_1px_0px_0px]" />
              <div className="bg-[#D9D9DF] flex w-1.5 shrink-0 h-2.5 rounded-[1px_1px_0px_0px]" />
            </div>
          </div>
        </div>
      );
    }
  };

  const renderTimeIcon = () => {
    if (activity.time.includes("hours")) {
      return (
        <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center w-[13px] my-auto px-px py-0.5">
          <div className="border flex shrink-0 h-2.5 stroke-[#707088] border-[rgba(112,112,136,1)] border-solid" />
        </div>
      );
    }
    return (
      <img
        src={
          activity.time.includes("min")
            ? "https://cdn.builder.io/api/v1/image/assets/TEMP/ea0155a1a3286b74aeceb1c589dca10ae837f51d?placeholderIfAbsent=true"
            : "https://cdn.builder.io/api/v1/image/assets/TEMP/29fae95d3c218223e5d8091d4f7a5e11b667f513?placeholderIfAbsent=true"
        }
        className="aspect-[1] object-contain w-[13px] self-stretch shrink-0 my-auto"
        alt="Time icon"
      />
    );
  };

  return (
    <div className="items-stretch bg-gray-50 relative flex min-w-60 flex-col overflow-hidden w-[310px] rounded-[10px]">
      <div className="z-0 flex w-full max-w-[310px] flex-col items-stretch justify-center p-1">
        {renderContent()}
      </div>
      <div className="border-t-slate-200 bg-white z-0 w-full pt-6 pb-4 px-4 border-t border-solid">
        <div className="flex w-full gap-2">
          <div className="flex-1 shrink basis-[0%]">
            <div className="text-[#171718] text-base font-semibold leading-none">
              {activity.title}
            </div>
            <div className="text-[#5B5B6F] text-sm font-medium leading-none mt-2">
              {activity.subtitle}
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-[#5B5B6F] font-medium leading-none">
            {renderTimeIcon()}
            <div className="self-stretch my-auto">{activity.time}</div>
          </div>
        </div>
        <div className="flex min-h-5 w-[162px] max-w-full items-center gap-2 mt-4">
          <div
            className={`bg-[${activity.user.color}] border self-stretch overflow-hidden text-[11px] text-white font-semibold whitespace-nowrap text-center leading-none w-5 h-5 my-auto px-px rounded-[624px] border-white border-solid`}
            style={{ backgroundColor: activity.user.color }}
          >
            {activity.user.initial}
          </div>
          <div className="text-[#5B5B6F] text-sm font-medium leading-none self-stretch my-auto">
            {activity.user.name}
          </div>
        </div>
      </div>
      {activity.buttonText && activity.buttonIcon && (
        <div className="bg-white border-slate-200 border absolute z-0 flex items-center gap-2 text-sm text-[#0D0D26] font-medium whitespace-nowrap justify-center p-2 rounded-lg border-solid left-4 top-[78px]">
          <img
            src={activity.buttonIcon}
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="Button icon"
          />
          <div className="self-stretch my-auto">{activity.buttonText}</div>
        </div>
      )}
      {activity.hasButton && (
        <div className="bg-white border-slate-200 border absolute z-0 flex min-h-[34px] items-center gap-2 justify-center py-2 rounded-lg border-solid left-4 top-[78px]" />
      )}
    </div>
  );
};

export default ActivityCard;
