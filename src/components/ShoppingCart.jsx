import { useShoppingCart } from './ShoppingCartContext';
import styles from '../styles/ShoppingCart.module.css';


const ShoppingCart =() => {

    const { isOpen, cartItems, closeCart, clearCart, removeFromCart, getCartTotal } = useShoppingCart();

    const removeItem = (e) => {
        console.log(e.target.id);
        removeFromCart(e.target.id);
    }

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
                                <button id={item.id} onClick={removeItem}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h4>Total Cost: ${totalPrice}</h4>
                    </>
                )}
                <button onClick={clearCart}>Remove All Items</button>
                <button onClick={closeCart}>Close Cart</button>
                </div>
            )
        }

}

export default ShoppingCart