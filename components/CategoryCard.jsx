import Image from "next/image";
const CategoryCard = ({ imagePath, categoryTitle }) => {
  return (
    <div suppressHydrationWarning  className="flex flex-col justify-center items-center gap-4">
      <Image src={imagePath} width={300} height={400} alt="category-image" />
      <p className="font-bold">{categoryTitle}</p>
    </div>
  );
};

export default CategoryCard;
