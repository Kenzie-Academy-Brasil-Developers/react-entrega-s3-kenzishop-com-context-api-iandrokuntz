import { useContext } from "react";
import { CartContext } from "../../providers/Cart";
import ProductCard from "../ProductCard";

const Cart = () => {

  const { cart } = useContext(CartContext)

    const totalPrice = cart.reduce((acc, value) => {
        return value.price + acc
    },0)

  return(

    <div>
        
        <h3 className="totalPrice">Total Price: R${totalPrice.toFixed(3)}</h3>
        
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <ProductCard product={item} removeItem index={index} />
            </li>
          ))}
        </ul>
    </div>

  )
}

export default Cart;