import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {
  return (
    <div
      className="flex  items-center justify-center gap-4 container mx-auto pt-8"
      suppressHydrationWarning
    >
      <CategoryCard imagePath="/category-image.png" categoryTitle="Living" />
      <CategoryCard imagePath="/category-image.png" categoryTitle="Home" />
      <CategoryCard imagePath="/category-image.png" categoryTitle="Living" />
    </div>
  );
};

export default CategoryGrid;
