# Zilion E-commerce

## Introduction

Zilion E-commerce is an e-commerce application that follows the design and implementation of Amazon in Next.js. This project demonstrates authentication and authorization with Auth0, payment gateway integration with Paystack, and Next.js specifics like SSR, SSG, client-side routing, and i18n.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository

```bash
git clone https://github.com/jnopareboateng/zilion-e-commerce.git
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file with your environment variables

```
# .env file
PAYSTACK_PUBLIC_KEY=your_paystack_public_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key
AUTH0_SECRET=your_auth0_secret
AUTH0_BASE_URL=your_auth0_base_url
AUTH0_ISSUER_BASE_URL=your_auth0_issuer_base_url
AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_client_secret
```

## Key Features

### Authentication and Authorization with Auth0

Use Auth0 for authentication and authorization:

```jsx
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
```

### Payment Gateway Integration with Paystack

Use Paystack for payment processing:

```jsx
import { usePaystackPayment } from "react-paystack";

const config = {
  reference: new Date().getTime(),
  email: "user@example.com",
  amount: 20000,
  publicKey: "PAYSTACK_PUBLIC_KEY",
};

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);

  return (
    <button onClick={() => initializePayment()}>
      Paystack Hook Implementation
    </button>
  );
};
```

### Next.js Specifics

Use Next.js features like SSR, SSG, client-side routing, and i18n:

```jsx
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default function Home({ data }) {
  // Render data...
}
```

## API Endpoints

All API endpoints are located in `src/pages/api`.

### Authentication

All authentication is set up with Auth0 at `src/pages/api/auth/[auth0].js`.

### Payment

Since Stripe doesn't work in Ghana, Paystack is used instead. The logic follows:

- User should be logged in to checkout products added to cart
- Payment should be redirected to Paystack
- To make API calls seamless, we use webhooks located at `src/pages/api/webhooks/paystack.js`
- After successful payment, a thank you message is sent, and an email is sent to the user

## Deployment

The web app is deployed on [Vercel](zilion.vercel.app).

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository
2. Create a new branch for your feature or fix
3. Make changes and commit them with a descriptive commit message
4. Open a pull request for review
