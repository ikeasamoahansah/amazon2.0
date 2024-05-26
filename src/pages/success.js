import Header from "@/components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function Success() {
  return (
    <div className="bg-cyan-900 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto ">
        <div className="">
          <div className="">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once your
            item has been shipped. If you would like to track the status of your
            order(s) please press the link below
          </p>
          <button className="button">Go to my orders</button>
        </div>
      </main>
    </div>
  );
}
