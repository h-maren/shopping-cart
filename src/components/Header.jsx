import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import styles from '../styles/Header.module.css';



const Header = () => {
    return (
        <>
        <nav className={styles.header}>
            <div className={styles.leftNavbar}>
                <h2>Home</h2>
                <h2>Shop</h2>
            </div>
            <div className='right-navbar'>
                <Icon path={mdiCart} size={1} />
            </div>
        </nav>
        </>
    )
}

export default Header