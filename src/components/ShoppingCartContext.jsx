import { createContext, useContext, useState } from "react";

const ShoppingCartContext=createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider ({children}) {
    const [cartItems, setCartItems] = useState([])

    function addToCart(id,quantity){
        console.log(id);
        console.log(quantity);
        setCartItems(currItems => {
            if(currItems.find(item=>item.id ===id) == null) {
                return [...currItems, {id: quantity}]
            } else {
                return currItems.map(item => {
                    if(item.id===id){
                        return {...item, quantity}
                    } else {
                        return item
                    }
                })
            }
        })
        console.log(cartItems);
    }
    

    return <ShoppingCartContext.Provider value={{ addToCart}}>
    {children}
    </ShoppingCartContext.Provider>
}