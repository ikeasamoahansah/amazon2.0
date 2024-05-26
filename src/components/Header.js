import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { SearchIcon } from "./SearchIcon.js";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";

export default function Header() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const items = useSelector(selectItems);

  function handleLogin() {
    router.push("/api/auth/login");
  }
  function handleLogout() {
    router.push("/api/auth/logout");
  }

  function handleCheckout() {
    router.push("/checkout");
  }

// Todo: add replace the carousel images
// FIXME:  1. https://www.pexels.com/photo/woman-in-blue-denim-jeans-talking-to-her-mobile-phone-6995253/
// FIXME: 2. https://www.istockphoto.com/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-gm1428709516-472100169?utm_campaign=srp_photos_10&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fonline%2520shopping%2F&utm_medium=affiliate&utm_source=pexels&utm_term=online%20shopping
// FIXME: 3. https://www.istockphoto.com/photo/latina-female-using-desktop-computer-with-clothing-online-web-store-to-choose-and-gm1347626309-425070530?utm_campaign=srp_photos_10&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fonline%2520shopping%2F&utm_medium=affiliate&utm_source=pexels&utm_term=online%20shopping
// FIXME: 4. https://www.istockphoto.com/photo/the-convenience-of-shopping-online-gm1467976868-499633289?utm_campaign=srp_photos_40&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fonline%2520shopping%2F&utm_medium=affiliate&utm_source=pexels&utm_term=online%20shopping
  return (
    <>
      <Navbar
        isBordered // Add a border to the bottom of the navbar
        className="bg-cyan-950  h-1/2"
      >
        <NavbarContent
          justify="start"
          className="items-center justify-center w-full"
        >
          <NavbarBrand className="items">
            <a href="/" className="">
              <h1 className="text-2xl sm:text-4xl text-bold text-white sm:p-2 p-1 ">
                ZILION
              </h1>{" "}
            </a>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          as="div"
          className="items-center justify-center w-full px-0 hidden sm:block mt-5"
        >
          <Input
            className={{
              base: "max-w-full h-10",
              mainWrHeader2er: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="md"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </NavbarContent>

        <NavbarContent
          as="div"
          className="items-center justify-center w-full px-0"
          justify="end"
        >
          {user ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  // color=""
                  name={user.name}
                  size="md"
                  src={user.picture}
                />
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
                // color="primary"
                className=" text-black"
              >
                <DropdownItem key="profile" className="h-14 gap-2">
                  Hello, {user.name}
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="returns_and_orders">
                  Returns & Orders{" "}
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  onClick={handleLogout}
                  color="danger"
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <div
              onClick={handleLogin}
              className="flex-col hover:underline text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap"
            >
              <button>Sign In</button>
              <button className="font-extrabold md:text-sm">
                Account & List
              </button>
            </div>
          )}
          {/* cart function */}
          <div
            onClick={handleCheckout}
            className="text-white relative link flex items-center"
          >
            <span className="absolute top-0 right-0 h-4 w-4 bg-cyan-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2"></p>
          </div>
        </NavbarContent>
      </Navbar>

      {/* Mobile search bar */}
      <section className="items-center bg-cyan-950 justify-center w-full px-0 sm:hidden block py-2 px-3">
        <Input
          className={{
            base: "max-w-full h-10",
            mainWrHeader2er: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="md"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </section>
    </>
  );
}
