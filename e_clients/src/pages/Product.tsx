import React, { useEffect, useState } from "react";

const Product: React.FC = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await fetch("http://localhost:8800/jobs");
    // console.log(response, "h");
    const dataBody = await response.json();
    setProducts(dataBody);
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(products, " state");

  return (
    <div>
      {products.map((product: any) => (
        <div>
          <h1>{product.title}</h1>
          <p>{product.company}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
