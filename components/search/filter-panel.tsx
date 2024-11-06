"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface FilterPanelProps {
  categories: string[];
  selectedCategory: string;
  priceRange: number[];
  onCategorySelect: (category: string) => void;
  onPriceRangeChange: (value: number[]) => void;
}

export default function FilterPanel({
  categories,
  selectedCategory,
  priceRange,
  onCategorySelect,
  onPriceRangeChange,
}: FilterPanelProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          الفلاتر
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>الفلاتر</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] pl-4">
          <div className="space-y-6 py-6">
            <div>
              <h3 className="font-medium mb-4">الفئة</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => onCategorySelect(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium mb-4">نطاق السعر</h3>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  min={0}
                  max={10000}
                  step={100}
                  onValueChange={onPriceRangeChange}
                />
                <div className="flex justify-between text-sm">
                  <span>{priceRange[0]} ريال</span>
                  <span>{priceRange[1]} ريال</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}