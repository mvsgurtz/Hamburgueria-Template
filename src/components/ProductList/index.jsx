import { ProductCard } from "./ProductCard";
import style from "./style.module.scss"

export const ProductList = ({ productList, addProductCart}) => {

   return (
      <ul className={style.product__ul}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addProductCart = {addProductCart} />
         ))}
      </ul>
   );
};
