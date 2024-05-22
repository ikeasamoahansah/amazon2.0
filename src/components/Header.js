import React from "react";
import Image from "next/image";
import clsx from "clsx";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";

const Header = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const items = useSelector(selectItems);

  function handleLogin() {
    router.push("/api/auth/login");
  }

  function handleCheckout() {
    router.push("/checkout");
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center bg-blue-950 p-1 flex-grow py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 mr-2">
          <h1 className="text-4xl text-bold text-white p-2">ZILION</h1>
        </div>
        <div
          className={clsx(
            "items-center h-8 rounded-md flex-grow bg-yellow-600 hover:bg-yellow-500",
            { "hidden sm:flex": !isLoading }
          )}
        >
          <input
            className="p-2 h-full w-4 flex-grow flex-shrink rounded-l-lg focus:outline-none"
            type="text"
          />
          <button>
            <SearchIcon className="h-12 p-4" />
          </button>
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link" onClick={handleLogin}>
            <p className="hover:underline">
              {user ? `Hello, ${user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm"> & Orders</p>
          </div>
          <div
            onClick={handleCheckout}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2"></p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-blue-900">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s Deals</p>
        <p className="link">Electronics</p>
      </div>
    </header>
  );
};

export default Header;
