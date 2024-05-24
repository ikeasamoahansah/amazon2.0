import { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/solid";
function DeliveryCard() {
  const deliveries = [
    {
      name: "Same Day Delivery",
      src: "https://melcom.com/media/Icons/shipping-fast-delivery-man-riding-260nw-1573225051_1.jpg",
      label:
        "Same Day Delivery. On supermarket orders. Applicable on COD orders only within Greater Accra ( T & C's apply)",
    },
    {
      name: "Free Shipping",
      src: "https://melcom.com/media/icon_cms1.png",
      label: "Accra, Tema & Kumasi on all orders over ₵ 50.00",
    },
    {
      name: "Standard Delivery",
      src: "https://melcom.com/media/Icons/shipping-fast-delivery-man-riding-260nw-1573225051_1.jpg",

      label: "Within 48 t0 72h of order confirmation",
    },

    {
      name: "Safe & Secure Payments",
      src: "https://melcom.com/media/icon_cms3.png",
      label: "Cash On Delivery, MOMO, CC / DC",
    },
  ];

  return (
    <div className="grid bg-white rounded-lg  lg:grid-cols-4 md:grid-cols-2 shadow-md border m-4 p-4 sm:grid-cols-1 gap-4">
      {deliveries.map((delivery, index) => {
        const Icon = delivery.icon;
        return (
          <div key={index} className="grid grid-cols-2">
            {/* <Icon className="h-10 w-10 my-2" aria-hidden="true" /> */}
            <img
            className="m-4"
              src={delivery.src}
              alt={delivery.name}
              width={50}
              height={50}
            />
            <div className="flex  flex-col right-16 relative ">
              <h1 className="text-sm font-semibold">{delivery.name}</h1>
              <p className="text-xs text-gray-800">{delivery.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryCard;
