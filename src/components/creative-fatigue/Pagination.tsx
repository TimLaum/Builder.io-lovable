import React from "react";
import { ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  resultsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalResults,
  resultsPerPage,
  onPageChange,
}) => {
  const showingStart = (currentPage - 1) * resultsPerPage + 1;
  const showingEnd = Math.min(currentPage * resultsPerPage, totalResults);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 7;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      // Calculate start and end of middle pages
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        endPage = 4;
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push("ellipsis1");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push("ellipsis2");
      }

      // Always show last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-between items-center py-4">
      <div className="text-sm font-medium text-[#5b5b6f]">
        Showing {showingStart} to {showingEnd} of {totalResults} results
      </div>
      <div className="flex items-center gap-7">
        <button
          className={`flex items-center gap-1 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronRight className="w-4 h-4 text-[#0d0d26] rotate-180" />
          <span className="text-sm font-medium text-[#0d0d26]">Previous</span>
        </button>

        <div className="flex items-center gap-5">
          {renderPageNumbers().map((page, index) => {
            if (page === "ellipsis1" || page === "ellipsis2") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="text-sm font-semibold text-[#707088]"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={`page-${page}`}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold ${
                  currentPage === page
                    ? "bg-[#f0f0f5] text-[#0d0d26]"
                    : "text-[#707088]"
                }`}
                onClick={() => onPageChange(Number(page))}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          className={`flex items-center gap-1 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
        >
          <span className="text-sm font-medium text-[#0d0d26]">Next</span>
          <ChevronRight className="w-4 h-4 text-[#0d0d26]" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
