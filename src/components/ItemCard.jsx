import styles from '../styles/ItemCard.module.css';
import {useState} from 'react';
import { useShoppingCart } from './ShoppingCart';

function ItemCard({item}) {

        const [numItem,setNumItem] = useState(0);


        const handleInputChange =(e) => {
            const {numItem} = e.target;
            setNumItem(numItem);
        }

        const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
        const quantity = getItemQuantity(item.id);


    return(
        <div className="shopCard">
            <h4>{item.title}</h4>
            <img src={item.image} />
            <p>{item.description}</p>
            <h4>{item.price}</h4>
            <div className='itemSelectionFields'>
                <input type='number' id={item.id} onChange={handleInputChange} min='0' required />
                <button id={item.id} onClick={() => increaseCartQuantity(item.id)}>Add to Cart</button>
            </div>
        </div>
    )

}

export default ItemCard