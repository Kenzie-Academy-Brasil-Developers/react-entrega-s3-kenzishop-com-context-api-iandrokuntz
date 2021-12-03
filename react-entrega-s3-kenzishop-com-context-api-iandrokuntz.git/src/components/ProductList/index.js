import { useContext } from "react";
import { ProductContext } from "../../providers/Products";
import ProductCard from "../ProductCard";

const ProductList = () => {

    const { products } = useContext(ProductContext)

  return(

      <div>

        <ul>
        {products.map((item, index) => (
            <li key={index}>
                <ProductCard product={item}/>
            </li>
        ))}
        </ul>
       </div>
  )
}

export default ProductList;