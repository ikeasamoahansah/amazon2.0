import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Header from "@/components/Header";

const Orders = ({ orders }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <Header/>
      <main className="max-w-screen-lg max-auto p-10">
        <h1 className="text-3xl">Your Orders</h1>
        {user ? <h2>orders</h2> : <h2>Please sign in to see your orders</h2>}
        <div className="mt-5 space-y-4"></div>
      </main>
    </div>
  );
};

export default Orders;
