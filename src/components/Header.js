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
      <div className="flex items-center bg-blue-600 p-1 flex-grow-0 py-2 ">
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
          <div>
            <p>Hello Josh</p>
            <p>Account & List</p>
          </div>
          <div>
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div>
            <ShoppingCartIcon className="h-10" />
          </div>
        </div>
      </div>

      {/* Right */}
    </header>
  );
};

export default Header;
