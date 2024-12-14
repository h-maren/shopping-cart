import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { useShoppingCart } from './ShoppingCartContext';
import ShoppingCart from './ShoppingCart';



const Header = () => {

    const { isOpen, openCart, closeCart, cartQuantity } = useShoppingCart()


    return (
        <>
        <nav className={styles.header}>
            <div className={styles.leftNavbar}>
                <h2><Link to="/">Home</Link></h2>
                <h2><Link to="/shop">Shop</Link></h2>
            </div>
            <div className={styles.rightNavbar}>
                <Icon path={mdiCart} size={1} onClick={openCart} />
                <div>({cartQuantity})</div>
            </div>
        </nav>
        </>
    )
}

export default Header