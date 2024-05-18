import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
function DeliveryCard() {
    const deliveries = [
        {
          name: "Delivery 1",
          img: "/amazon-prime.svg",
          label: "Label 1",
        },
        {
          name: "Delivery 2",
          img: "/amazon-prime.svg",
          label: "Label 2",
        },
        {
          name: "Delivery 3",
          img: "/amazon-prime.svg",
          label: "Label 3",
        },
        {
          name: "Delivery 4",
          img: "/amazon-prime.svg",
          label: "Label 4",
        },
      ];
  return (  <>
    {deliveries.map((delivery, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md p-4 grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
      >
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{delivery.name}</h2>
          <p className="text-blue-400">{delivery.label}</p>
        </div>
        <div className="flex justify-end">
          <Image
            src={delivery.img}
            alt={delivery.name}
            width={100}
            height={100}
            className="rounded-lg transition-transform hover:scale-110"
          />
        </div>
      </div>
    ))}
  </>
);
}

export default DeliveryCard;
