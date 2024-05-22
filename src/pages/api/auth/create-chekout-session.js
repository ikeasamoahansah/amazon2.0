// .../api/create-checkout-session.js
import axios from "axios";

const paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  // test if the user is authenticated
  console.log(items, email);

  const transformedItems = items.map((item) => ({
    name: item.title,
    amount: item.price * 100, // Paystack uses kobo as the smallest unit
    quantity: 1,
    metadata: {
      custom_fields: [
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: "+233xxxxxxxxx",
        },
      ],
    },
  }));

  const response = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      email: email,
      amount: transformedItems.reduce((total, item) => total + item.amount, 0),
      currency: "GHS",
      callback_url: `${process.env.HOST}/success`,
      metadata: {
        custom_fields: transformedItems,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    }
  );

  if (response.data.status) {
    res.status(200).json({ id: response.data.data.reference });
  } else {
    res.status(400).json({ error: "Failed to create checkout session" });
  }
};
