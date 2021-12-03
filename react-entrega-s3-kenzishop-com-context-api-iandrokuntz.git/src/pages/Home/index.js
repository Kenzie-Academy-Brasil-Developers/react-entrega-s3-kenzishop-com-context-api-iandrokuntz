import ProductList from "../../components/ProductList";
import { Link } from "react-router-dom";
import "./style.css"

const Home = () => {


    return(
        <div>
            <h1>GAMING SHOP</h1>
            <Link to="/cart" className="goCart">Go Cart</Link>
            <ProductList/>

        </div>

    )
}

export default Home;