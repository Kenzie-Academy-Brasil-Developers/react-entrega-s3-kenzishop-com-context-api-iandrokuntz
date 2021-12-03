import Cart from "../../components/Cart";
import { Link } from "react-router-dom";

const CartPage = () => {


    return(
        <div>
            <Link to="/" className="goHome">Go Home</Link>
            <Cart/>
        </div>
    )
}

export default CartPage;