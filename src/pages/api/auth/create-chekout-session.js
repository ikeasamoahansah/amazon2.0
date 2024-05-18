// .../api/create-checkout-session.js

import { getSession } from "next-auth/react";
import { stripe } from "@/server";
import { insertOrder } from "@/db";
import { v4 as uuidv4 } from "uuid";
import { formatAmountForStripe } from "@/utils/stripe-helpers";

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  // test if the user is authenticated
  console.log(items, email);
};

const transformedItems = items.map((item) => ({
  description: item.description,
  quantity: 1,
  price_data: {
    currency: "&#8373;",
    unit_amount: formatAmountForStripe(item.price),
    product_data: {
      name: item.title,
      images: [item.image],
    },
  },
}));

const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  shipping_rates: ["shr_1J9y0vKZJ1m3QXcW"],
  shipping_address_collection: {
    allowed_countries: ["GH"],
  },
  line_items: transformedItems,
  mode: "payment",
  success_url: `${process.env.HOST}/success`,
  cancel_url: `${process.env.HOST}/checkout`,
  metadata: {
    email,
    images: JSON.stringify(items.map((item) => item.image)),
  },
});

