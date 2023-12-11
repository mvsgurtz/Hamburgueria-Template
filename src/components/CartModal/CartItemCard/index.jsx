import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const CartItemCard = ({ product, removeProductCart }) => {
  return (
    <li className={style.li__item}>
      <div className={style.item__info}>
        <img src={product.img} alt={product.name} />
        <div className={style.item__value}>
          <h3>{product.name}</h3>
          <span>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </div>
      <button
        onClick={() => {
          removeProductCart(product.id);
        }}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
