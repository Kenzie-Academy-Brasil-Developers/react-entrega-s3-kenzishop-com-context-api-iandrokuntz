import { useContext } from "react";
import { CartContext } from "../../providers/Cart";


const ProductCard = ({ product, removeItem = false, index }) => {

  const { id, name, image, price } = product

  const { addToCart, removeFromCart } = useContext(CartContext)

  const handleClick = (data) => {

    addToCart(data)

  }

  return (
    <div key={id}>
      <ul>
      <img src={image} alt={`img${id}`} />
        <li><h4>{name}</h4></li>
        <li><strong>Price: R$</strong>{price}</li>
      </ul>

      {removeItem ? (

        <button className="RemoveItem" onClick={() => removeFromCart(id)}>Remove</button>

      ) : (

          <button className="AddtoCart" onClick={() => handleClick(product)}>Add to cart</button>
        
      )}
    </div>
  );
};

export default ProductCard;