import Hero from "@/components/Hero";
import CompSeprator from "@/components/CompSeprator";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import ShowMoreButton from "@/components/ShowMoreButton";
import InspirationScroller from "@/components/InspirationScroller";

export default function Home() {
  return (
    <div
      suppressHydrationWarning
      className=""
    >
      <Hero />
      <CompSeprator
        title="Browse the range"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <CategoryGrid />

      <CompSeprator title="Our Products" />
      <ProductGrid />
      <InspirationScroller />
    </div>
  );
}
