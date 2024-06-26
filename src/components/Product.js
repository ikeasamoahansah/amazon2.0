import React from "react";
import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";
import { format } from "currency-formatter";

function Product({ id, title, price, description, category, image }) {
  // Dispatch the action to add an item to the basket
  const dispatch = useDispatch();
  // Generate a random rating outside of the component
  const rating = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  const [hasPrime] = useState(Math.random() < 0.5);
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GHS",
  }).format(price);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  };
  return (
    <main className="">
      <div className="relative flex items-center flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">
          {category}
        </p>
        <div className="flex justify-center w-40 h-40 items-center">
          {/* Centered the image */}
          <Image src={image} height={100} width={100} />
          {/* removed layout="responsive" from the Image */}
        </div>

        <h4 className="my-3">{title}</h4>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <div>
          <p className="text-xs my-2 line-clamp-2">{description}</p>
        </div>
        <p className="">{formattedPrice}</p>

        {/* <NumberFormat
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      /> */}

        {/* {hasPrime && (
        <div className="flex items-center space-x-2">
          <Image
            width={48}
            height={48}
            alt="prime logo"
            loading="lazy"
            className="w-12"
            src="/amazon-prime.svg"
          />
          <p className="text-xs text-gray-500 mb-1">FREE Next-day Delivery</p>
        </div>
      )} */}
        <button onClick={addItemToBasket} className="mt-auto text-white button">
          Add to Basket
        </button>
      </div>
    </main>
  );
}

export default Product;