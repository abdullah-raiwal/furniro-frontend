import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div className=" grid md:grid-cols-4 grid-cols-1 gap-y-3 container mx-auto sm:gap-3  md:gap-y-5 py-2">
      <ProductCard productImage="/product-image.png" productTitle="Product A" />
      <ProductCard productImage="/product-image.png" productTitle="Product A" />
      <ProductCard productImage="/product-image.png" productTitle="Product A" />
      <ProductCard productImage="/product-image.png" productTitle="Product A" />
      <ProductCard productImage="/product-image.png" productTitle="Product A" />
      <ProductCard productImage="/product-image.png" productTitle="Product A" />
      <ProductCard productImage="/product-image.png" productTitle="Product A" />
      <ProductCard productImage="/product-image.png" productTitle="Product A" />
    </div>
  );
};

export default ProductGrid;
