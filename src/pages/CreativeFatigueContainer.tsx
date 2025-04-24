import React, { useState } from "react";
import { useSidebar } from "../contexts/SidebarContext";
import {
  CreativeFatigueHeader,
  CreativeFatigueFilters,
  CategoryCards,
  CreativesTable,
  Pagination,
} from "@/components/creative-fatigue";
import type { CreativeData } from "../types/creative-fatigue";

const CreativeFatigueContainer: React.FC = () => {
  const { isOpen } = useSidebar();
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange] = useState("30 nov - 6 déc, 2024");
  const [groupBy] = useState("Creative");

  const categories = [
    {
      title: "Fatigued creatives",
      count: 32,
      description:
        "Overexposed ads with declining engagement, requiring a refresh or pause to regain performance.",
      color: "#5C68F8",
    },
    {
      title: "Top performers",
      count: 18,
      description:
        "Highly visible and consistently engaging ads, maximize their performance and monitor results.",
      color: "#52CDAC",
    },
    {
      title: "Low performers",
      count: 64,
      description:
        "Ads with low visibility and engagement, test new exposure or rethink the creative direction.",
      color: "#FCA05E",
    },
    {
      title: "Hidden gems",
      count: 40,
      description:
        "Strong-performing ads with limited reach, scale them up and carefully monitor their future impact.",
      color: "#F87171",
    },
  ];

  const creatives: CreativeData[] = [
    {
      id: "1696585817900719",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4b34cb321154ff9e525bfa659fe0f6f4643a757",
      ctr: "1,0%",
      avgFrequency: "1.40",
      clicks: "280",
      impressions: "14,500",
      cpm: "€58.62",
      fatigueScore: {
        label: "Top performers",
        type: "top",
      },
    },
    {
      id: "1696585817900719",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/78939e442edfd479f84b0af36b7c25e055abec40",
      ctr: "0,59%",
      avgFrequency: "1.38",
      clicks: "260",
      impressions: "13,800",
      cpm: "€56.52",
      fatigueScore: {
        label: "Fatigued creatives",
        type: "fatigued",
      },
    },
    {
      id: "1696585817900719",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4839a6d37d63f90c9e4f52de335bfb5be59f6806",
      ctr: "1,35%",
      avgFrequency: "1.35",
      clicks: "245",
      impressions: "13,200",
      cpm: "€54.55",
      fatigueScore: {
        label: "Low performers",
        type: "low",
      },
    },
    {
      id: "1696585817900719",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdc23bd83b7ec11853cdff0f4245a4af109a589a",
      ctr: "0,93%",
      avgFrequency: "1.32",
      clicks: "230",
      impressions: "12,700",
      cpm: "€54.33",
      fatigueScore: {
        label: "Hidden gems",
        type: "hidden",
      },
    },
    {
      id: "1696585817900719",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cc527e36f013b5723be7d370345597b71c5b923",
      ctr: "0,42%",
      avgFrequency: "1.26",
      clicks: "182",
      impressions: "11,000",
      cpm: "€52.73",
      fatigueScore: {
        label: "Fatigued creatives",
        type: "fatigued",
      },
    },
    {
      id: "1696585817900719",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4b34cb321154ff9e525bfa659fe0f6f4643a757",
      ctr: "0,77%",
      avgFrequency: "1.22",
      clicks: "170",
      impressions: "10,500",
      cpm: "€51.43",
      fatigueScore: {
        label: "Top performers",
        type: "top",
      },
    },
  ];

  const totalResults = 74;
  const resultsPerPage = 12;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Here you would typically fetch data for the new page
  };

  return (
    <div className={`${isOpen ? 'ml-[280px]' : 'ml-0'} flex-1 transition-all duration-300 max-lg:w-full max-lg:ml-0`}>
      <div className="p-8 bg-[#f7f7f7] min-h-screen max-sm:p-4">
        <div className="space-y-6">
          <CreativeFatigueHeader
            title="Creative fatigue"
            description="Add description..."
            isPublished={false}
          />
          <CreativeFatigueFilters dateRange={dateRange} groupBy={groupBy} />
          <div className="grid grid-cols-1 gap-4 max-md:overflow-x-auto">
            <CategoryCards categories={categories} />
          </div>
          <div className="bg-white rounded-lg overflow-hidden max-md:overflow-x-auto">
            <CreativesTable creatives={creatives} />
            <div className="px-4 max-sm:px-2">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeFatigueContainer;
