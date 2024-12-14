import { createContext, useContext, useState } from "react";

const ShoppingCartContext=createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({children}) {
    const [cartItems, setCartItems] = useState([])
    const cartQuantity=cartItems.reduce((quantity, item) => item.quantity+quantity,0);
    const [isOpen, setIsOpen]=useState(false);


    function openCart() {
        setIsOpen(true);
        console.log(isOpen);
    }

    function closeCart(){
        setIsOpen(false);
    }

    function clearCart(){
        setCartItems([]);
    }

    function getCartTotal(){
        return cartItems.reduce((total,item)=>total+item.price*item.quantity,0)
    }



    function addToCart(item, numItem){
        const isItemIncart = cartItems.find((cartItem)=>cartItem.id===item.id);
        if(isItemIncart){
            setCartItems(
                cartItems.map((cartItem)=>
                cartItem.id==item.id?{...cartItem,quantity: cartItem.quantity+numItem}:cartItem
            )
        )} else {
            setCartItems([...cartItems, 
                {id: item.id, 
                title: item.title,
                quantity: numItem,
                price: item.price
                }]);
        }
        console.log(item);
        console.log(numItem);
        console.log(cartItems);
    }

    function removeFromCart(itemID){
        console.log(itemID);
        setCartItems(cartItems.filter((cartItem)=>cartItem.id !== itemID));
    }


    

    return <ShoppingCartContext.Provider value={{ addToCart, isOpen, openCart, closeCart, clearCart, cartItems, cartQuantity, removeFromCart,getCartTotal}}>
    {children}
    </ShoppingCartContext.Provider>
}