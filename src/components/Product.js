import React from "react";
// import ProductFeed from './ProductFeed'
import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
// import Currency from "react-currency-formatter";
function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  // random rating between 1 and 5
  const [hasPrime] = useState(Math.random() < 0.5);
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div>
        <p>{currencyFormat(price)}</p>
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            loading="lazy"
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt=""
          />
          <p>FREE Next-day Delivery</p>
        </div>
      )}
      <button className="button">Add to Basket</button>
    </div>
  );
}

export default Product;
