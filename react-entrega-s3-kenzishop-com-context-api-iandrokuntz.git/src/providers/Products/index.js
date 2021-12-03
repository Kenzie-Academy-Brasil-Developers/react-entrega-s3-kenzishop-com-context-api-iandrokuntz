import { createContext } from "react";
import { useState } from "react";

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([

        {
          id: 1,
          name: "Console Xbox 360 Super Slim 4GB + 2 Controles",
          price: 1.449,
          image: "https://images-americanas.b2w.io/produtos/01/00/img/2587541/3/2587541307_1SZ.jpg",
        },
        {
          id: 2,
          name: "Console Xbox One S 1tb",
          price: 3.199,
          image: "https://images-americanas.b2w.io/produtos/01/00/img/2066366/6/2066366654_1SZ.jpg",
        },
        {
          id: 3,
          name: "Console Xbox Series x 1TB",
          price: 8.499,
          image: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/190904/Xbox-Series-X-1tb_1628254753_gg.jpg",
        },
        {
          id: 4,
          name: "Console PlayStation 3 Super Slim",
          price: 1.439,
          image: "https://images-americanas.b2w.io/produtos/2668607451/imagens/console-playstation-3-super-slim/2668607478_1_xlarge.jpg",
        },
        {
          id: 5,
          name: "Console PlayStation 4 Pro 1TB",
          price: 2.519,
          image: "https://cdn.awsli.com.br/600x450/138/138431/produto/19019395/c076459b70.jpg",
        },
        {
          id: 6,
          name: "Console Playstation PS5 1TB",
          price: 7.649,
          image: "https://images-americanas.b2w.io/produtos/2901703547/imagens/novo-console-playstation-ps5/2901703547_3_xlarge.jpg",
        },
      ])
  

  const filterProducts = (inputValue) => {

    if(inputValue){

      setProducts(

        products.filter((currentValue) => {

          let currentProduct = currentValue.name.toLowerCase()

          inputValue = inputValue.toLowerCase()

          return currentProduct.includes(inputValue)
        })
      )

    }else{

      setProducts(products)
    }
  }

  return (
    <ProductContext.Provider value={{ products, filterProducts }}>
      {children}
    </ProductContext.Provider>
  )
}