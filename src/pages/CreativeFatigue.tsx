import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Info,
  MoreHorizontal,
  Send,
  ChevronDown,
  LayoutPanelLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CreativeFatigue: React.FC = () => {
  return (
    <div className="max-w-[1239px] w-full flex flex-col pt-5 px-8 pb-8 bg-[#f7f7f7]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 mb-5">
        <Link to="/" className="text-sm font-medium text-[#5b5b6f]">
          Home
        </Link>
        <span className="text-sm font-medium text-[#707088]">/</span>
        <Link to="/reports" className="text-sm font-medium text-[#5b5b6f]">
          Weekly reports
        </Link>
        <span className="text-sm font-medium text-[#707088]">/</span>
        <LayoutPanelLeft className="w-3.5 h-3.5 text-[#0d0d26]" />
        <span className="text-sm font-medium text-[#5b5b6f]">
          Creative fatigue
        </span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-10 rounded-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] font-bold text-[#19194d] font-['Plus_Jakarta_Sans',sans-serif]">
              Creative fatigue
            </h1>
            <p className="text-base font-medium text-[#8e8ea2] font-['Plus_Jakarta_Sans',sans-serif]">
              Add description...
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-[#707088]" />
              <span className="text-sm font-medium text-[#707088]">
                Not published
              </span>
            </div>
            <Button className="flex items-center gap-2 bg-gradient-to-r from-[#0064e1] to-[#0082fb] text-white">
              <Send className="w-4 h-4" />
              <span className="text-base font-medium">Publish</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-4 h-4 text-[#5b5b6f]" />
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <div className="flex items-center gap-2 py-4 px-3 bg-[#f7f7f7] rounded-lg">
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
            <span className="text-sm font-medium text-[#5b5b6f]">
              Butterfl.ai
            </span>
            <ChevronDown className="w-4.5 h-4.5 text-[#373743]" />
          </div>
          <div className="flex items-center gap-2 py-4 px-3 bg-[#f7f7f7] rounded-lg">
            <span className="text-sm font-medium text-[#5b5b6f]">Date</span>
            <span className="text-sm font-semibold text-[#373743]">
              30 nov - 6 déc, 2024
            </span>
            <ChevronDown className="w-4.5 h-4.5 text-[#373743]" />
          </div>
          <div className="flex items-center gap-2 py-4 px-3 bg-[#f7f7f7] rounded-lg">
            <span className="text-sm font-medium text-[#5b5b6f]">Group by</span>
            <span className="text-sm font-semibold text-[#373743]">
              Creative
            </span>
            <ChevronDown className="w-4.5 h-4.5 text-[#373743]" />
          </div>
        </div>

        {/* Category Cards */}
        <div className="flex gap-5">
          <div className="flex flex-col gap-2 p-3 border border-[#e2e8f0] rounded-lg flex-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#5C68F8]"></div>
              <span className="text-base font-semibold text-[#25252d]">
                Fatigued creatives
              </span>
            </div>
            <Badge
              variant="outline"
              className="w-fit bg-[#ededf1] text-[#5b5b6f] rounded-full text-xs font-medium"
            >
              32
            </Badge>
            <p className="text-sm text-[#373743]">
              Overexposed ads with declining engagement, requiring a refresh or
              pause to regain performance.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-3 border border-[#e2e8f0] rounded-lg flex-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#52CDAC]"></div>
              <span className="text-base font-semibold text-[#25252d]">
                Top performers
              </span>
            </div>
            <Badge
              variant="outline"
              className="w-fit bg-[#ededf1] text-[#5b5b6f] rounded-full text-xs font-medium"
            >
              18
            </Badge>
            <p className="text-sm text-[#373743]">
              Highly visible and consistently engaging ads, maximize their
              performance and monitor results.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-3 border border-[#e2e8f0] rounded-lg flex-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#FCA05E]"></div>
              <span className="text-base font-semibold text-[#25252d]">
                Low performers
              </span>
            </div>
            <Badge
              variant="outline"
              className="w-fit bg-[#ededf1] text-[#5b5b6f] rounded-full text-xs font-medium"
            >
              64
            </Badge>
            <p className="text-sm text-[#373743]">
              Ads with low visibility and engagement, test new exposure or
              rethink the creative direction.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-3 border border-[#e2e8f0] rounded-lg flex-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#F87171]"></div>
              <span className="text-base font-semibold text-[#25252d]">
                Hidden gems
              </span>
            </div>
            <Badge
              variant="outline"
              className="w-fit bg-[#ededf1] text-[#5b5b6f] rounded-full text-xs font-medium"
            >
              40
            </Badge>
            <p className="text-sm text-[#373743]">
              Strong-performing ads with limited reach, scale them up and
              carefully monitor their future impact.
            </p>
          </div>
        </div>

        {/* Table */}
        <div>
          {/* Table Header */}
          <div className="flex bg-[#f7f7f7] border-t border-b border-[#e2e8f0]">
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              Creative
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              CTR
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              AVG Frequency
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              Clicks
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              Impressions
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              CPM
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              Fatigue score
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex border-b border-[#e2e8f0]">
            <div className="flex-1 p-4 flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4b34cb321154ff9e525bfa659fe0f6f4643a757?placeholderIfAbsent=true"
                alt="Creative Image"
                className="w-9 h-9 rounded object-cover"
              />
              <span className="text-base font-medium text-[#0d0d26]">
                1696585817900719
              </span>
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              1,0%
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              1.40
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              280
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              14,500
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              €58.62
            </div>
            <div className="flex-1 p-4">
              <Badge className="bg-[#dcfce7] text-[#171718] font-medium text-xs rounded-full">
                Top performers
              </Badge>
            </div>
          </div>

          <div className="flex border-b border-[#e2e8f0]">
            <div className="flex-1 p-4 flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78939e442edfd479f84b0af36b7c25e055abec40?placeholderIfAbsent=true"
                alt="Creative Image"
                className="w-9 h-9 rounded object-cover"
              />
              <span className="text-base font-medium text-[#0d0d26]">
                1696585817900719
              </span>
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              0,59%
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              1.38
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              260
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              13,800
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              €56.52
            </div>
            <div className="flex-1 p-4">
              <Badge className="bg-[#e0f2fe] text-[#171718] font-medium text-xs rounded-full">
                Fatigued creatives
              </Badge>
            </div>
          </div>

          <div className="flex border-b border-[#e2e8f0]">
            <div className="flex-1 p-4 flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4839a6d37d63f90c9e4f52de335bfb5be59f6806?placeholderIfAbsent=true"
                alt="Creative Image"
                className="w-9 h-9 rounded object-cover"
              />
              <span className="text-base font-medium text-[#0d0d26]">
                1696585817900719
              </span>
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              1,35%
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              1.35
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              245
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              13,200
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              €54.55
            </div>
            <div className="flex-1 p-4">
              <Badge className="bg-[#ffedd5] text-[#171718] font-medium text-xs rounded-full">
                Low performers
              </Badge>
            </div>
          </div>

          <div className="flex border-b border-[#e2e8f0]">
            <div className="flex-1 p-4 flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdc23bd83b7ec11853cdff0f4245a4af109a589a?placeholderIfAbsent=true"
                alt="Creative Image"
                className="w-9 h-9 rounded object-cover"
              />
              <span className="text-base font-medium text-[#0d0d26]">
                1696585817900719
              </span>
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              0,93%
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              1.32
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              230
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              12,700
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              €54.33
            </div>
            <div className="flex-1 p-4">
              <Badge className="bg-[#fee2e2] text-[#171718] font-medium text-xs rounded-full">
                Hidden gems
              </Badge>
            </div>
          </div>

          <div className="flex border-b border-[#e2e8f0]">
            <div className="flex-1 p-4 flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cc527e36f013b5723be7d370345597b71c5b923?placeholderIfAbsent=true"
                alt="Creative Image"
                className="w-9 h-9 rounded object-cover"
              />
              <span className="text-base font-medium text-[#0d0d26]">
                1696585817900719
              </span>
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              0,42%
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              1.26
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              182
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              11,000
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              €52.73
            </div>
            <div className="flex-1 p-4">
              <Badge className="bg-[#e0f2fe] text-[#171718] font-medium text-xs rounded-full">
                Fatigued creatives
              </Badge>
            </div>
          </div>

          <div className="flex border-b border-[#e2e8f0]">
            <div className="flex-1 p-4 flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4b34cb321154ff9e525bfa659fe0f6f4643a757?placeholderIfAbsent=true"
                alt="Creative Image"
                className="w-9 h-9 rounded object-cover"
              />
              <span className="text-base font-medium text-[#0d0d26]">
                1696585817900719
              </span>
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              0,77%
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              1.22
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              170
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              10,500
            </div>
            <div className="flex-1 p-4 text-sm font-medium text-[#525866]">
              €51.43
            </div>
            <div className="flex-1 p-4">
              <Badge className="bg-[#dcfce7] text-[#171718] font-medium text-xs rounded-full">
                Top performers
              </Badge>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center py-4">
          <div className="text-sm font-medium text-[#5b5b6f]">
            Showing 12 of 74 results
          </div>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-1 opacity-50">
              <ChevronRight className="w-4 h-4 text-[#0d0d26] rotate-180" />
              <span className="text-sm font-medium text-[#0d0d26]">
                Previous
              </span>
            </div>
            <div className="flex items-center gap-5">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold text-[#707088]">
                1
              </button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold text-[#707088]">
                2
              </button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold text-[#707088]">
                3
              </button>
              <span className="text-sm font-semibold text-[#707088]">...</span>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold text-[#707088]">
                8
              </button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold text-[#707088]">
                9
              </button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold text-[#707088]">
                10
              </button>
            </div>
            <div className="flex items-center gap-1 opacity-50">
              <span className="text-sm font-medium text-[#0d0d26]">Next</span>
              <ChevronRight className="w-4 h-4 text-[#0d0d26]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeFatigue;
