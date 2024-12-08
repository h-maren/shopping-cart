import styles from '../styles/ItemCard.module.css';

function ItemCard({item}) {
    return(
        <div className="shopCard">
            <h4>{item.title}</h4>
            <img src={item.image} />
            <p>{item.description}</p>
            <h4>{item.price}</h4>

        </div>
    )

}

export default ItemCard