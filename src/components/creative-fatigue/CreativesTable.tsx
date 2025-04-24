
import React from "react";
import { Badge } from "@/components/ui/badge";
import type { CreativeData } from "@/types/creative-fatigue";

interface CreativesTableProps {
  creatives: CreativeData[];
}

const getFatigueScoreBadgeColor = (type: string) => {
  switch (type) {
    case "top":
      return "bg-[#dcfce7] text-[#166534]";
    case "fatigued":
      return "bg-[#e0f2fe] text-[#075985]";
    case "low":
      return "bg-[#ffedd5] text-[#9a3412]";
    case "hidden":
      return "bg-[#fee2e2] text-[#991b1b]";
    default:
      return "bg-[#ededf1] text-[#171718]";
  }
};

const CreativesTable: React.FC<CreativesTableProps> = ({ creatives }) => {
  return (
    <div className="w-full overflow-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-[#f7f7f7] border-t border-b border-[#e2e8f0]">
            <th className="p-4 text-left text-sm font-medium text-[#525866]">Creative</th>
            <th className="p-4 text-left text-sm font-medium text-[#525866]">CTR</th>
            <th className="p-4 text-left text-sm font-medium text-[#525866]">AVG Frequency</th>
            <th className="p-4 text-left text-sm font-medium text-[#525866]">Clicks</th>
            <th className="p-4 text-left text-sm font-medium text-[#525866]">Impressions</th>
            <th className="p-4 text-left text-sm font-medium text-[#525866]">CPM</th>
            <th className="p-4 text-left text-sm font-medium text-[#525866]">Fatigue score</th>
          </tr>
        </thead>
        <tbody>
          {creatives.map((creative, index) => (
            <tr key={index} className="border-b border-[#e2e8f0] hover:bg-gray-50">
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <img
                    src={creative.imageUrl}
                    alt="Creative"
                    className="w-9 h-9 rounded object-cover"
                  />
                  <span className="text-base font-medium text-[#0d0d26]">
                    {creative.id}
                  </span>
                </div>
              </td>
              <td className="p-4 text-sm font-medium text-[#525866]">
                {creative.ctr}
              </td>
              <td className="p-4 text-sm font-medium text-[#525866]">
                {creative.avgFrequency}
              </td>
              <td className="p-4 text-sm font-medium text-[#525866]">
                {creative.clicks}
              </td>
              <td className="p-4 text-sm font-medium text-[#525866]">
                {creative.impressions}
              </td>
              <td className="p-4 text-sm font-medium text-[#525866]">
                {creative.cpm}
              </td>
              <td className="p-4">
                <Badge
                  className={`${getFatigueScoreBadgeColor(creative.fatigueScore.type)} font-medium text-xs rounded-full px-3 py-1`}
                >
                  {creative.fatigueScore.label}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreativesTable;
