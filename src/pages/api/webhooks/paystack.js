// api/webhooks/paystack.js
// import { buffer } from "micro";
import { getSession } from "@auth0/nextjs-auth0";

const crypto = require("crypto");
// Establish connection to Paystack
const paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);
// const endpointSecret = process.env.STRIPE_SIGNING_SECRET; // Uncomment and set the actual secret

// Handle the incoming webhook
const endpointSecret = crypto
  .createHmac("sha512", secret)
  .update(JSON.stringify(req.body))
  .digest("hex");
if (hash == req.headers["x-paystack-signature"]);

const session = getSession(req, res);
// Fulfill the order
const fulfillOrder = async (session) => {
  console.log("Fulfilling order", session);
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();

    let event;
    // Verify event by comparing the signature
    try {
      event = paystack.webhook.verify(payload, endpointSecret);
    } catch (err) {
      console.error(err);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("Payment was successful! Session ID:", session.id);
      // Fulfill the order or perform other necessary actions
    }

    res.status(200).send("Webhook received successfully.");
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
