import React from "react";
import { Badge } from "@/components/ui/badge";

interface CreativeData {
  id: string;
  imageUrl: string;
  ctr: string;
  avgFrequency: string;
  clicks: string;
  impressions: string;
  cpm: string;
  fatigueScore: {
    label: string;
    type: "top" | "fatigued" | "low" | "hidden";
  };
}

interface CreativesTableProps {
  creatives: CreativeData[];
}

const getFatigueScoreBadgeColor = (type: string) => {
  switch (type) {
    case "top":
      return "bg-[#dcfce7]";
    case "fatigued":
      return "bg-[#e0f2fe]";
    case "low":
      return "bg-[#ffedd5]";
    case "hidden":
      return "bg-[#fee2e2]";
    default:
      return "bg-[#ededf1]";
  }
};

const CreativesTable: React.FC<CreativesTableProps> = ({ creatives }) => {
  return (
    <div>
      {/* Table Header */}
      <div className="flex bg-[#f7f7f7] border-t border-b border-[#e2e8f0]">
        <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
          Creative
        </div>
        <div className="flex-1 p-4 text-sm font-medium text-[#525866]">CTR</div>
        <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
          AVG Frequency
        </div>
        <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
          Clicks
        </div>
        <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
          Impressions
        </div>
        <div className="flex-1 p-4 text-sm font-medium text-[#525866]">CPM</div>
        <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
          Fatigue score
        </div>
      </div>

      {/* Table Rows */}
      {creatives.map((creative, index) => (
        <div key={index} className="flex border-b border-[#e2e8f0]">
          <div className="flex-1 p-4 flex items-center gap-2">
            <img
              src={creative.imageUrl}
              alt="Creative Image"
              className="w-9 h-9 rounded object-cover"
            />
            <span className="text-base font-medium text-[#0d0d26]">
              {creative.id}
            </span>
          </div>
          <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
            {creative.ctr}
          </div>
          <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
            {creative.avgFrequency}
          </div>
          <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
            {creative.clicks}
          </div>
          <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
            {creative.impressions}
          </div>
          <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
            {creative.cpm}
          </div>
          <div className="flex-1 p-4">
            <Badge
              className={`${getFatigueScoreBadgeColor(creative.fatigueScore.type)} text-[#171718] font-medium text-xs rounded-full`}
            >
              {creative.fatigueScore.label}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreativesTable;
