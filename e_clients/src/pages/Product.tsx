import React, { useEffect, useState } from "react";

const Product: React.FC = () => {
  // const [products, setProducts] = useState([]);
  const [data, getData] = useState([]);

  // const getProduct = async () => {
  //   const response = await fetch("http://localhost:8800/job");
  //   // console.log(response, "h");
  //   const dataBody = await response.json();
  //   setProducts(dataBody);
  // };
  const getJsonData = async () => {
    const response = await fetch("http://localhost:8800/me/data");
    // console.log(response, "h");
    const dataBody = await response.json();
    getData(dataBody);
  };

  useEffect(() => {
    // getProduct();
    getJsonData();
  }, []);

  console.log(" state", data);

  interface DATA {
    id: number;
    name: string;
    age: number;
    bio: string;
  }

  return (
    <div>
      {/* {products.map((product: any) => (
        <div>
          <h1>{product.title}</h1>
          <p>{product.company}</p>
          <p>{product.description}</p>
        </div>
      ))} */}
      <div>
        {data.map((e: DATA) => (
          <div key={e.id}>
            <h1>{e.name}</h1>
            <p>{e.bio}</p>
            <p>{e.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
