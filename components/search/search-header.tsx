"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  children: React.ReactNode;
}

export default function SearchHeader({
  searchQuery,
  onSearchChange,
  children,
}: SearchHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 mb-8">
      <div className="relative flex-1">
        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="ابحث عن المنتجات..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pr-9 pl-4"
        />
      </div>
      {children}
    </div>
  );
}