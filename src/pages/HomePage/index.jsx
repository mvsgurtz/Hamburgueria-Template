import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import axios from "axios";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(() => {
      const localInfo = localStorage.getItem("@CartItems");
      return localInfo ? JSON.parse(localInfo) : [];
   });
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const hamburguerList = async () => {
         const serverURL = "https://hamburgueria-kenzie-json-serve.herokuapp.com";
         const api = axios.create({ baseURL: serverURL, timeout: 5 * 1000 });
         const getApi = await api.get("/products");
         setProductList(getApi.data);
      }
      hamburguerList();
   }, [])

   useEffect(() => {
      localStorage.setItem("@CartItems", JSON.stringify(cartList))
   }, [cartList])

   const addProductCart = (product) => {

      const hasProduct = cartList.some((cartItem) => cartItem.id === product.id);
      
      if (!hasProduct) {
         setCartList([...cartList, product])
      }
      else {
         console.log("O produto já foi adicionado!");
      }
   }

   const removeProductCart = (productID) => {
      const removeItem = cartList.filter((cartProduct) => cartProduct.id !== productID)
      setCartList(removeItem);
   }

   const removeAllProducts = () => {
      setCartList([]);
   }

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <div>
         <Header setIsVisible={setIsVisible} />
         <main className="main__container">
            <ProductList productList={productList}
               addProductCart={addProductCart} />
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
