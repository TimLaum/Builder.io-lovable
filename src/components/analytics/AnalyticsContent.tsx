
import React from "react";
import { useSidebar } from "../../contexts/SidebarContext";

const AnalyticsContent: React.FC = () => {
  const { isOpen } = useSidebar();

  return (
    <div className={`${isOpen ? 'ml-[280px]' : 'ml-0'} flex-1 transition-all duration-300 max-[1024px]:w-full max-[1024px]:ml-0`}>
      <div className="flex flex-col gap-6 px-8 py-8">
        <div className="flex flex-col items-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col items-stretch w-[49%] max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col items-stretch max-md:mt-10">
                <div className="text-black text-3xl font-bold leading-10">Welcome back!</div>
                <div className="text-neutral-500 text-base leading-6 mt-2">Track, analyze and optimize your online marketing strategy</div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:ml-0 max-md:w-full">
              <div className="flex grow items-stretch justify-between gap-5 mt-1.5 max-md:mt-10">
                <div className="items-stretch flex gap-4 px-6 py-3 rounded-lg border border-[color:var(--Gray-300,#D0D5DD)] border-solid">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f327e33762c99134d66861a31a64c3059126a37b78c48ba25e860053783c6fd?apiKey=e8326c6863f848278e37e519af417777&" alt="Search" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                  <div className="text-neutral-600 text-base leading-6 grow whitespace-nowrap">Search</div>
                </div>
                <div className="items-stretch flex gap-2 px-4 py-3 rounded-lg border border-[color:var(--Gray-300,#D0D5DD)] border-solid">
                  <div className="text-neutral-700 text-base font-medium leading-6">Filters</div>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a49535790de44067594c672ed24181ed60a683c819c3a3c48c2f543984e28d6?apiKey=e8326c6863f848278e37e519af417777&" alt="Filter" className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 bg-white rounded-xl border border-gray-200 border-solid max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:mt-10">
                <div className="text-slate-700 text-sm font-medium leading-5 whitespace-nowrap">Total Revenue</div>
                <div className="text-slate-900 text-2xl font-semibold leading-8 whitespace-nowrap mt-2">$45,231.89</div>
                <div className="flex gap-2 mt-4 items-start">
                  <div className="flex gap-1 px-2 py-0.5 rounded-full bg-emerald-50">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40365726cc2fe9b823afceac60b01b58a060874c14d9e512204a8fca68c9c4d4?apiKey=e8326c6863f848278e37e519af417777&" alt="Up" className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto" />
                    <div className="text-emerald-700 text-sm font-medium leading-5">+20.1%</div>
                  </div>
                  <div className="text-slate-600 text-sm leading-5 self-stretch">vs last month</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:mt-10">
                <div className="text-slate-700 text-sm font-medium leading-5 whitespace-nowrap">Subscriptions</div>
                <div className="text-slate-900 text-2xl font-semibold leading-8 whitespace-nowrap mt-2">2,431</div>
                <div className="flex gap-2 mt-4 items-start">
                  <div className="flex gap-1 px-2 py-0.5 rounded-full bg-emerald-50">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40365726cc2fe9b823afceac60b01b58a060874c14d9e512204a8fca68c9c4d4?apiKey=e8326c6863f848278e37e519af417777&" alt="Up" className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto" />
                    <div className="text-emerald-700 text-sm font-medium leading-5">+180.1%</div>
                  </div>
                  <div className="text-slate-600 text-sm leading-5 self-stretch">vs last month</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:mt-10">
                <div className="text-slate-700 text-sm font-medium leading-5 whitespace-nowrap">Active Now</div>
                <div className="text-slate-900 text-2xl font-semibold leading-8 whitespace-nowrap mt-2">573</div>
                <div className="flex gap-2 mt-4 items-start">
                  <div className="flex gap-1 px-2 py-0.5 rounded-full bg-emerald-50">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/40365726cc2fe9b823afceac60b01b58a060874c14d9e512204a8fca68c9c4d4?apiKey=e8326c6863f848278e37e519af417777&" alt="Up" className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto" />
                    <div className="text-emerald-700 text-sm font-medium leading-5">+19.4%</div>
                  </div>
                  <div className="text-slate-600 text-sm leading-5 self-stretch">vs last hour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsContent;
