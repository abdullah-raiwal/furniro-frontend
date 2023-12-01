  import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="container  mx-auto flex items-center justify-center gap-4 pt-8"
        suppressHydrationWarning
      >
        <CategoryCard imagePath="/category-image.png" categoryTitle="Living" />
        <CategoryCard imagePath="/category-image.png" categoryTitle="Home" />
        <CategoryCard imagePath="/category-image.png" categoryTitle="Kitchen" />
      </div>
    </>
  );
};

export default CategoryGrid;
