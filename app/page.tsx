import SearchInterface from "@/components/search/search-interface";
import { MOCK_ITEMS } from "@/lib/mock-data";

export default function Home() {
  return <SearchInterface initialItems={MOCK_ITEMS} />;
}