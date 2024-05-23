// .../api/verify-transaction.js
import axios from "axios";

export default async (req, res) => {
  const { reference } = req.query;

  const verifyResponse = await axios.get(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    }
  );

  if (verifyResponse.data.status) {
    // The transaction was successful
    // Update your application state here
    res.json({ status: "success" });
  } else {
    res.status(400).json({ error: "Failed to verify transaction" });
  }
};
