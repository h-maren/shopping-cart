import {useEffect, useState} from 'react';
import ItemCard from '../components/ItemCard';
import styles from '../styles/Shop.module.css';


const Shop = () => {
    let [isLoading,setLoading] = useState(true);
    let [shopData,setShopData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10',{mode:'cors'})
        .then(res=>res.json())
        .then((data) => {
            setLoading(false);
            setShopData(data);
        })
    },[])
    console.log(shopData);

    if(!isLoading){
        return (
            <div className={styles.cardContainer}>
                {shopData.map(item => (
                    <ItemCard item={item} key={item.id} />
                ))}
            </div>
        )
    }

}

export default Shop