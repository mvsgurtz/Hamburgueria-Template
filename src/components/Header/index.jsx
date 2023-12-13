import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";

export const Header = ({setIsVisible, count, filter, productList}) => {
   const [value, setValue] = useState("");
   const [showInput, setShowInput] = useState(false);


   
   const showInputHeader = () => {
      if(window.innerWidth <=425 ){
         setShowInput(true);
      }
      
   }


   return (
      <header className={style.header__container}>
         <div className={style.header__content}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className={style.shop__container}>
               <button onClick={() => {setIsVisible(true)}} className={style.cart__button}>
                  <MdShoppingCart className={style.cart__icon} size={21} />
                  <span>{count}</span>
               </button>
               <form>
                  {showInput ? (<input className={style.header__input}
                     type="text" onMouseOut={() => {setShowInput(false)}}
                     onChange={(e) => filter(productList, e.target.value)}
                     placeholder="Procurar..."
                  />) : (<button className={style.header__srcBtn} type="submit" onMouseOver={showInputHeader}>
                  <MdSearch size={21} />
               </button>)}
               </form>
            </div>
         </div>
      </header>
   );
};
