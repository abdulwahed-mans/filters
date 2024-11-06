"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Item } from "@/lib/types";

interface ResultsGridProps {
  items: Item[];
}

export default function ResultsGrid({ items }: ResultsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-1 line-clamp-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {item.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="font-semibold">{item.price.toFixed(2)} ريال</span>
              <Badge variant="secondary" className="text-xs">
                {item.category}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}