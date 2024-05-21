import React from "react";
import Header from "@/components/Header";
import CheckoutProduct from "@/components/CheckoutProduct";
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { selectTotal } from "@/slices/basketSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

// import { loadStripe } from "stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);
const paystackPromise = loadStripe(process.env.paystack_public_key);

function Checkout() {
  const items = useSelector(selectItems);

  const total = useSelector(selectTotal);
  const { user } = useUser();
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(total);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const paystack = await paystackPromise;
    // Call the backend to create a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
      email: user.email,
    });
  };
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            className="object-contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your basket is empty" : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price} // Modify this line
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {/* check if there are items to be checked out and render */}
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="font-bold p-1"> {formattedTotal}</span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!user}
                className={`button mt-2 ${
                  !user &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!user ? "Sign In to checkout" : "proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout; // Changed from 'checkout' to 'Checkout'
