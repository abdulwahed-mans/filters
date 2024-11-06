"use client";

import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ActiveFiltersProps {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
}

export default function ActiveFilters({
  filters,
  onRemoveFilter,
}: ActiveFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <Badge
          key={filter}
          variant="secondary"
          className="flex items-center gap-1"
        >
          {filter}
          <X
            className="h-3 w-3 cursor-pointer"
            onClick={() => onRemoveFilter(filter)}
          />
        </Badge>
      ))}
    </div>
  );
}