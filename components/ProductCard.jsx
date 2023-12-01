import Image from "next/image";

const ProductCard = ({
  productImage,
  productTitle,
  productCategory,
  productPrice,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={productImage}
        width={300}
        height={100}
        alt="product-image"
        className="w-full"
      />
      <div className="flex w-full flex-col gap-1 bg-[#f4f5f7] py-2 pl-3">
        <h1 className="text-lg font-bold">{productTitle}</h1>
        <p className="font-light">category</p>
        <p className="text-sm font-bold">price</p>
      </div>
    </div>
  );
};

export default ProductCard;
