import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addToCart = (productItem) => {

    setCart([...cart, productItem])

  }

  const removeFromCart = (productIndex) => {

    let filterCart = cart.filter((item) => item.id !== productIndex)

    setCart(filterCart)

    console.log(productIndex)
  }



  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}