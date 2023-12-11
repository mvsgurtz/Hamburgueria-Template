import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";

export const Header = ({setIsVisible, count}) => {
   const [value, setValue] = useState("");

   console.log(count);

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
                  <input
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                     placeholder="Procurar..."
                  />
                  <button type="submit">
                     <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};
