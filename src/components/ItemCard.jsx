import styles from '../styles/ItemCard.module.css';
import {useState} from 'react';

function ItemCard({item,numToPass}) {

        const [numItem,setNumItem] = useState(0);

        const handleInputChange =(e) => {
            const {numItem} = e.target;
            setNumItem(numItem);
        }

    return(
        <div className="shopCard">
            <h4>{item.title}</h4>
            <img src={item.image} />
            <p>{item.description}</p>
            <h4>{item.price}</h4>
            <div className='itemSelectionFields'>
                <input type='number' id='itemAmount' onChange={handleInputChange} min='0' required />
                <button>Add to Cart</button>
            </div>
        </div>
    )

}

export default ItemCard