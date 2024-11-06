"use client";

import { useState } from "react";
import SearchHeader from "./search-header";
import FilterPanel from "./filter-panel";
import ActiveFilters from "./active-filters";
import ResultsGrid from "./results-grid";
import { CATEGORIES } from "@/lib/mock-data";
import type { Item } from "@/lib/types";

interface SearchInterfaceProps {
  initialItems: Item[];
}

export default function SearchInterface({ initialItems }: SearchInterfaceProps) {
  const [items] = useState(initialItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <SearchHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        >
          <FilterPanel
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            onCategorySelect={(category) => {
              setSelectedCategory(category);
              addFilter(`Category: ${category}`);
            }}
            onPriceRangeChange={(value) => {
              setPriceRange(value);
              addFilter(`Price: $${value[0]} - $${value[1]}`);
            }}
          />
        </SearchHeader>

        <ActiveFilters
          filters={activeFilters}
          onRemoveFilter={removeFilter}
        />

        <ResultsGrid items={items} />
      </div>
    </main>
  );
}