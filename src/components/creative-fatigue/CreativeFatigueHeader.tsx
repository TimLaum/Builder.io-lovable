import React from "react";
import { Info, MoreHorizontal, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreativeFatigueHeaderProps {
  title: string;
  description?: string;
  isPublished?: boolean;
}

const CreativeFatigueHeader: React.FC<CreativeFatigueHeaderProps> = ({
  title,
  description = "Add description...",
  isPublished = false,
}) => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex flex-col gap-2">
        <h1 className="text-[28px] font-bold text-[#19194d] font-['Plus_Jakarta_Sans',sans-serif]">
          {title}
        </h1>
        <p className="text-base font-medium text-[#8e8ea2] font-['Plus_Jakarta_Sans',sans-serif]">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-[#707088]" />
          <span className="text-sm font-medium text-[#707088]">
            {isPublished ? "Published" : "Not published"}
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
  );
};

export default CreativeFatigueHeader;
