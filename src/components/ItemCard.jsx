import styles from '../styles/ItemCard.module.css';
import {useState} from 'react';
import { useShoppingCart } from './ShoppingCartContext';

function ItemCard({item}) {

        const [numItem,setNumItem] = useState(0);


        const handleInputChange =(e) => {
            let newNumItem = e.target.valueAsNumber;
            setNumItem(newNumItem);
        }

        const { addToCart } = useShoppingCart()

        const addButtonClick = (e) => {
            addToCart(item,numItem);
            setNumItem(0);
        }

    return(
        <div className="shopCard">
            <h4>{item.title}</h4>
            <img src={item.image} />
            <p>{item.description}</p>
            <h4>{item.price}</h4>
            <div className='itemSelectionFields'>
                <input type='number' id={item.id} value={numItem} onChange={handleInputChange} min='0' required />
                <button id={item.id} onClick={addButtonClick}>Add to Cart</button>
            </div>
        </div>
    )

}

export default ItemCard