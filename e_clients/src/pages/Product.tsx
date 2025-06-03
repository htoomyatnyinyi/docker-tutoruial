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
    <div className="p-2 m-1 text-2xl flex ">
      {products.map((product: any) => (
        <div key={product.id} className="p-2 m-1 border hover:shadow-xl">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.salary}</p>
          <p>{product.location}</p>
          <p>{product.company}</p>
          <p>{product.postedAt}</p>
          <p>{product.updatedAt}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
