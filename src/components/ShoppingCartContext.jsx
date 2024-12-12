import { createContext, useContext, useState } from "react";

const ShoppingCartContext=createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({children}) {
    const [cartItems, setCartItems] = useState([])
    const cartQuantity=cartItems.reduce((quantity, item) => item.quantity+quantity,0);


    function addToCart(item, numItem){
        console.log(item);
        console.log(numItem);
        setCartItems([...cartItems, 
            {id: item.id, 
            quantity: numItem,
            price: item.price
            }
        ])
        console.log(cartItems);
    }
    

    return <ShoppingCartContext.Provider value={{ addToCart, cartItems, cartQuantity}}>
    {children}
    </ShoppingCartContext.Provider>
}