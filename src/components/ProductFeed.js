import React from "react";
import Product from "../components/Product";
import Image from "next/image";
function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {/* <h1>Products here...</h1> */}
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
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
      <Image
        width={800}
        height={400}
        className="md:col-span-full object-cover"
        layout="responsive"
        src="https://links.papareact.com/dyz"
        alt="Ad Banner"
      />
      <div className="md:col-span-2">
        {products
          .slice(7, 8)
          .map(({ id, title, price, description, category, image }) => (
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
      </div>
    </div>
  );
}

export default ProductFeed;
