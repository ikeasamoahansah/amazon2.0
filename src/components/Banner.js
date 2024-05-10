import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 bottom-0 z-20"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            className="object-contain"
            width={1920}
            height={1080}
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="carousel image 1"
          />
        </div>
        <div>
          <Image
            className="object-contain"
            width={1920}
            height={1080}
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt=" carousel image 2"
          />
        </div>
        <div>
          <Image
            className="object-contain"
            loading="lazy"
            width={1920}
            height={1080}
            src="https://links.papareact.com/7ma"
            alt=" carousel image 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
