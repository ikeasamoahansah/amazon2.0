import React from "react";
// import next from "next";
import Image from "next/image";
// import nextConfig from "../../next.config";
const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center">
        <div>
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={150}
            objectFit="contain"
            className="cursor-pointer"

          ></Image>
        </div>
      </div>
    </header>
  );
};

export default Header;
