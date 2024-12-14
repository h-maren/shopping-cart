import { useShoppingCart } from './ShoppingCartContext';
import styles from '../styles/ShoppingCart.module.css';


const ShoppingCart =() => {

    const { isOpen, cartItems, closeCart, clearCart, removeFromCart, getCartTotal } = useShoppingCart();

    const totalPrice=getCartTotal();

        if(isOpen){
            return (
                <div className={styles.shopCartContainer}>
                    <h2>Your Shopping Cart</h2>
                {cartItems.length===0 ? (
                    <p>Your cart is empty! Add some stuff!</p>
                ) : (
                    <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.quantity} x {item.title} = ${item.price}
                                <button id={item.id} onClick={()=>removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h4>Total Cost: ${totalPrice}</h4>
                    </>
                )}
                <div className={styles.cartButtons}>
                    <div className={styles.firstBtnRow}>
                        <button onClick={clearCart}>Remove All Items</button>
                        <button onClick={closeCart}>Close Cart</button>
                    </div>
                <button className={styles.checkOutButton}>Check Out and Pay</button>
                </div>
                </div>
            )
        }

}

export default ShoppingCart