import styles from '../styles/ItemCard.module.css';
import {useState} from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import PropTypes from 'prop-types';

function ItemCard({item}) {

        const [numItem,setNumItem] = useState(0);


        const handleInputChange =(e) => {
            let newNumItem = e.target.valueAsNumber;
            setNumItem(newNumItem);
        }

        const { addToCart } = useShoppingCart()

        const addButtonClick = () => {
            addToCart(item,numItem);
            setNumItem(0);
        }

        ItemCard.propTypes = {
            item: PropTypes.shape({
                title: PropTypes.string,
                image: PropTypes.string,
                description: PropTypes.string,
                id: PropTypes.number,
                price: PropTypes.number,
            })
        }

    return(
        <div className={styles.shopCard}>
            <h4>{item.title}</h4>
            <img src={item.image} />
            <p>{item.description}</p>
            <div className={styles.bottomContent}>
                <h4>${item.price}</h4>
                <div className={styles.itemSelectionFields}>
                    <input type='number' id={item.id} value={numItem} onChange={handleInputChange} min='0' required />
                    <button id={item.id} onClick={addButtonClick}>Add to Cart</button>
                </div>
            </div>
        </div>
    )

}

export default ItemCard