import React from "react";
import { Badge } from "@/components/ui/badge";

interface CategoryCardProps {
  title: string;
  count: number;
  description: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  count,
  description,
  color,
}) => {
  return (
    <div className="flex flex-col gap-2 p-3 border border-[#e2e8f0] rounded-lg flex-1">
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
        <span className="text-base font-semibold text-[#25252d]">{title}</span>
      </div>
      <Badge
        variant="outline"
        className="w-fit bg-[#ededf1] text-[#5b5b6f] rounded-full text-xs font-medium"
      >
        {count}
      </Badge>
      <p className="text-sm text-[#373743]">{description}</p>
    </div>
  );
};

interface CategoryCardsProps {
  categories: CategoryCardProps[];
}

const CategoryCards: React.FC<CategoryCardsProps> = ({ categories }) => {
  return (
    <div className="flex gap-5">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          count={category.count}
          description={category.description}
          color={category.color}
        />
      ))}
    </div>
  );
};

export default CategoryCards;
