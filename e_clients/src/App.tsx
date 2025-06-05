import React from "react";
import Product from "./pages/Product";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center  flex-col h-screen">
      <h1 className="text-cyan-900 text-7xl font-bold">
        HTOO MYAT NYI NYI WEB
      </h1>
      <p className="text-green-500 p-2 m-1 text-2xl  text-wrap text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ea, vel
        cumque natus, harum consequuntur optio maxime animi quae excepturi ut
        quod quas ad inventore voluptate hic aut numquam quisquam!
      </p>
      <Product />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        reiciendis eveniet, temporibus numquam quas, dignissimos illo iure quasi
        maxime aut atque et voluptates eum omnis! Illo ad quis voluptatum
        placeat.
      </p>
    </div>
  );
};

export default App;
