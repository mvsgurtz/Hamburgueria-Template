import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss"

export const CartModal = ({ cartList, setIsVisible, removeProductCart, removeAllProducts }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={style.modal__container} >
         <div className={style.modal__cart} >
            <div className={style.cart__header}>
               <h2>Carrinho de compras</h2>
               <button onClick={() => { setIsVisible(false) }} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeProductCart={removeProductCart} />
                  ))}
               </ul>
            </div>
            <div className={style.cart__footer}>
               <div className={style.cart__value}>
                  <hr />
                  <span>Total</span>
                  <span className={style.value__span}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={() => { removeAllProducts() }}>Remover todos</button>
            </div>
         </div>
      </div>

   );
};
