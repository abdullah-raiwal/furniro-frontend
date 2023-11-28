import Image from "next/image";

const ProductCard = ({
  productImage,
  productTitle,
  productCategory,
  productPrice,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={productImage} width={300} height={100} alt="product-image" className= "w-full" />
      <div className="flex flex-col bg-[#f4f5f7] gap-1 pl-3 py-2 w-full">
        <h1 className="font-bold text-lg">{productTitle}</h1>
        <p className="font-light">category</p>
        <p className="font-bold text-sm">price</p>
      </div>
    </div>
  );
};

export default ProductCard;
