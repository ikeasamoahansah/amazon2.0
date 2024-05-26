module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "fakestoreapi.com",
      "melcom.com",
      "t3.ftcdn.net",
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    paystack_public_key: process.env.PAYSTACK_PUBLIC_KEY,
  },
};
