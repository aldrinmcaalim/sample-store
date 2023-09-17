import { useContext } from "react";

import "./shop.styles.scss";

import { ProductsContext } from "../../contexts/Products.context";
import ProductCard from "../../components/product-card/ProductCard.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
