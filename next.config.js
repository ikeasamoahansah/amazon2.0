module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com", "melcom.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    paystack_public_key: process.env.PAYSTACK_PUBLIC_KEY,
  },
};
