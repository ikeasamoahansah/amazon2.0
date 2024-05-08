import React from "react";
import Product from "./Product";
function ProductFeed({ products }) {
  return (
    <div className="text-center font-extrabold">
      <h1>Products here...</h1>
      {/* {products.map({
        id,
        title,
        price,
        description,
        category,
        image,
      })} */}
      {products.map((product) => {
        const { id, title,image, price, description,category } = product;

        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />;
      })}
    </div>
  );
}

export default ProductFeed;
