// .../api/create-checkout-session.js

import { getSession } from "next-auth/react";
import { stripe } from "@/server";
import { insertOrder } from "@/db";
import { v4 as uuidv4 } from "uuid";
import { formatAmountForStripe } from "@/utils/stripe-helpers";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  // test if the user is authenticated
  console.log(items, email);
};
