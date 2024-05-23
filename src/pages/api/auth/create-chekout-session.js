// .../api/create-checkout-session.js
import axios from "axios";

export default async (req, res) => {
  const { items, email } = req.body;

  // test if the user is authenticated
  console.log(items, email);

  const transformedItems = items.map((item) => ({
    name: item.title,
    amount: item.price * 100, // Paystack uses kobo as the smallest unit
    quantity: 1,
  }));

  const total = transformedItems.reduce(
    (total, item) => total + item.amount,
    0
  );

  const response = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      email: email,
      amount: total,
      currency: "GHS",
      callback_url: `${process.env.HOST}/success`,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    }
  );

  if (response.data.status) {
    res.json({ authorization_url: response.data.data.authorization_url });
  } else {
    res.status(400).json({ error: "Failed to initialize transaction" });
  }
};
