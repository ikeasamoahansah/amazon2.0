import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-blue-950 p-1 flex-grow-0 py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={100}
            height={40}
            objectFit="contain"
            className="p-1 cursor-pointer"
          />
        </div>
        {/*  Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-600 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-lg focus:outline-none"
            type="text"
          />
          <button>
            <SearchIcon className="h-12 p-4" />
          </button>
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Josh</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2"></p>
          </div>
        </div>
      </div>

      {/* Right */}
      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-blue-950">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link">Electronics</p>
      </div>
    </header>
  );
};

export default Header;
