import React from "react";
import Product from "../components/Product";
function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 text-center font-extrabold">
      {/* <h1>Products here...</h1> */}
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
      {/* {products.map((product) => {
        const { id, title,image, price, description,category } = product; */}
    </div>
  );
}

export default ProductFeed;
