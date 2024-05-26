import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { getSession } from "@auth0/nextjs-auth0";

const orders = ({ orders }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg max-auto p-10">
        <h1 className="text-3xl">Your Orders</h1>
        {user ? <h2>orders</h2> : <h2>Please signin to see your orders</h2>}
        <div className="mt-5 space-y-4"></div>
      </main>
    </div>
  );
};

export default orders;

export async function getServerSideProps(context) {
  const paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);
}
