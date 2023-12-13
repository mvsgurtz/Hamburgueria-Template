import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import axios from "axios";
import style from "./style.module.scss";
import { toast } from "react-toastify";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(() => {
      const localInfo = localStorage.getItem("@CartItems");
      return localInfo ? JSON.parse(localInfo) : [];
   });
   const [isVisible, setIsVisible] = useState(false);
   const [count, setCount] = useState(2);
   const hamburguerList = async () => {
      const serverURL = "https://hamburgueria-kenzie-json-serve.herokuapp.com";
      const api = axios.create({ baseURL: serverURL, timeout: 5 * 1000 });
      const getApi = await api.get("/products");
      setProductList(getApi.data);
   }
   useEffect(() => {
      hamburguerList();
   }, [])

   useEffect(() => {
      localStorage.setItem("@CartItems", JSON.stringify(cartList))
      addCount();

   }, [cartList])

   const addCount = () => {
      if(cartList){
         setCount(cartList.length)
      }
   }

   const addProductCart = (product) => {

      const hasProduct = cartList.some((cartItem) => cartItem.id === product.id);

      if (!hasProduct) {
         setCartList([...cartList, product])
         addCount();
      }
      else {
         toast.error("O produto já foi adicionado!");
      }
   }

   const removeProductCart = (productID) => {
      const removeItem = cartList.filter((cartProduct) => cartProduct.id !== productID)
      setCartList(removeItem);
   }

   const removeAllProducts = () => {
      setCartList([]);
   }

   const filter = (product, e) => {
      const productsFilter = productList.filter((product) => product.name.toLowerCase().includes(e.toLowerCase()) )
       if(!e) {
         hamburguerList();
       }
       else {
         setProductList(productsFilter);
       }
   }

   return (
      <div>
            <Header setIsVisible={setIsVisible} count={count} filter={filter} productList={productList}/>
         <main className={style.main__container}>
            <ProductList productList={productList}
               addProductCart={addProductCart} addCount = {addCount} />
            {isVisible ? (
               <CartModal
                  setIsVisible={setIsVisible}
                  cartList={cartList}
                  removeProductCart={removeProductCart}
                  removeAllProducts={removeAllProducts} />
            ) : null}

         </main>
      </div>
   );
};
