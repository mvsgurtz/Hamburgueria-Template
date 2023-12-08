import axios from "axios";
import styles from "./style.module.scss";
import btnStyle from "../../../styles/button.scss"

export const ProductCard = ({ product, addProductCart}) => {
    
    return(
        <li className={styles.card__product}
        >
            <div className= {styles.card__image}>
                <img src={product.img} alt={product.name} />
            </div>
          
            <div className= {styles.card__info}>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span
                className= {styles.info__price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="btnCard" onClick={() => {addProductCart(product)}}>Adicionar</button>
            </div>
        </li>
    )
}