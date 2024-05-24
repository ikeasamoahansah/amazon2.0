import axios from "axios";
import Paystack from "paystack";

const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
const paystack = Paystack(paystackSecretKey);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { items, email } = req.body;

  try {
    const response = await paystack.transaction.initialize({
      email,
      amount: items.reduce((acc, item) => acc + item.price * 100, 0),
      metadata: {
        custom_fields: [
          {
            display_name: "Items",
            variable_name: "items",
            value: JSON.stringify(items),
          },
        ],
      },
    });

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Error creating checkout session" });
  }
}
