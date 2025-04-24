import React from "react";
import { ChevronDown } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterProps {
  label: string;
  value?: string;
  options?: FilterOption[];
  icon?: React.ReactNode;
  onChange?: (value: string) => void;
}

const FilterItem: React.FC<FilterProps> = ({ label, value, icon }) => {
  return (
    <div className="flex items-center gap-2 py-4 px-3 bg-[#f7f7f7] rounded-lg">
      {icon && icon}
      <span className="text-sm font-medium text-[#5b5b6f]">{label}</span>
      {value && (
        <span className="text-sm font-semibold text-[#373743]">{value}</span>
      )}
      <ChevronDown className="w-4.5 h-4.5 text-[#373743]" />
    </div>
  );
};

interface CreativeFatigueFiltersProps {
  dateRange: string;
  groupBy: string;
  onDateRangeChange?: (dateRange: string) => void;
  onGroupByChange?: (groupBy: string) => void;
}

const CreativeFatigueFilters: React.FC<CreativeFatigueFiltersProps> = ({
  dateRange,
  groupBy,
}) => {
  const butterflyIcon = (
    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0064e1] to-[#0082fb] flex items-center justify-center">
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.08018 11.0591C6.08018 11.4408 6.16406 11.7342 6.27358 11.9115C6.41716 12.1437 6.63144 12.2422 6.84975 12.2422C7.13142 12.2422 7.38892 12.1723 7.88561 11.4855C8.2834 10.9349 8.75224 10.1624 9.06762 9.67784L9.60166 8.85699C9.97271 8.28705 10.402 7.65337 10.8947 7.22408C11.2965 6.87355 11.7302 6.67868 12.1668 6.67868C12.8993 6.67868 13.5975 7.10321 14.1315 7.89952C14.7161 8.77164 15 9.87014 15 11.0038C15 11.6778 14.867 12.173 14.641 12.5642C14.4227 12.9426 13.9971 13.3206 13.281 13.3206V12.2418C13.8942 12.2418 14.0469 11.6785 14.0469 11.0338C14.0469 10.1152 13.8326 9.09544 13.3609 8.3669C13.0261 7.85007 12.592 7.53433 12.1144 7.53433C11.5979 7.53433 11.1826 7.92369 10.7155 8.61817C10.4672 8.98702 10.2123 9.43682 9.92619 9.94413L9.61119 10.5024C8.97824 11.6247 8.81781 11.88 8.5017 12.3019C7.94714 13.0404 7.47354 13.3206 6.85012 13.3206C6.11058 13.3206 5.64283 13.0004 5.3531 12.5177C5.11611 12.1246 5 11.6085 5 11.0203L6.08018 11.0591Z"
          fill="white"
        />
        <path
          d="M5.85181 7.97619C6.34703 7.21285 7.06165 6.67917 7.8814 6.67917C8.35611 6.67917 8.82789 6.81982 9.32054 7.22201C9.85972 7.66192 10.4341 8.38607 11.1509 9.58016L11.408 10.0087C12.0285 11.0424 12.3812 11.5739 12.5878 11.8248C12.8534 12.1467 13.0395 12.2427 13.2812 12.2427C13.8944 12.2427 14.0471 11.6794 14.0471 11.0347L14.9998 11.0047C14.9998 11.6786 14.8669 12.1738 14.6409 12.565C14.4226 12.9434 13.9969 13.3214 13.2808 13.3214C12.8358 13.3214 12.4413 13.2247 12.0054 12.8134C11.6703 12.4976 11.2783 11.9369 10.9769 11.4325L10.0802 9.93436C9.63042 9.18237 9.21762 8.62195 8.97843 8.36812C8.7213 8.09523 8.39127 7.76558 7.86382 7.76558C7.4371 7.76558 7.07484 8.06483 6.77155 8.52306L5.85181 7.97619Z"
          fill="white"
        />
        <path
          d="M7.86363 7.76472C7.43691 7.76472 7.07465 8.06398 6.77136 8.5222C6.34244 9.16943 6.08018 10.1331 6.08018 11.0591C6.08018 11.4408 6.16406 11.7342 6.27358 11.9115L5.35273 12.518C5.11611 12.1246 5 11.6085 5 11.0203C5 9.95109 5.2934 8.83648 5.85162 7.9757C6.34684 7.21236 7.06146 6.67868 7.88121 6.67868L7.86363 7.76472Z"
          fill="white"
        />
      </svg>
    </div>
  );

  return (
    <div className="flex gap-2">
      <FilterItem label="Butterfl.ai" icon={butterflyIcon} />
      <FilterItem label="Date" value={dateRange} />
      <FilterItem label="Group by" value={groupBy} />
    </div>
  );
};

export default CreativeFatigueFilters;
