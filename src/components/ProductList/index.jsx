import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addProductCart}) => {

   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addProductCart = {addProductCart} />
         ))}
      </ul>
   );
};
