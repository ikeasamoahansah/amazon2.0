import { getSession } from "@auth0/nextjs-auth0";

const paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);


export default async (req, res) => {
  const session = getSession(req, res);
  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "GHS",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  try {
    const session = await paystack.checkout.session.create({
      payment_method_types: ["card", "mobile money"],
      // shipping_rates: ["shr_1Jk5JmK9Xr4Y9J5z"],
      shipping_address_collection: {
        allowed_countries: ["NG", "GH"],
      },
      line_items: transformedItems,
      mode: "payment",
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/cancel`,
      metadata: {
        email,
        items: JSON.stringify(items.map((item) => item.image)),
      },
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
