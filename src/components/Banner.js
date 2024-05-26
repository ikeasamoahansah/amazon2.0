import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-24 bg-gradient-to-t from-gray-100 bottom-0 z-20"></div>
     <div className="w-50 h-50 sm:mt-[-200px]"> <Carousel
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
            src="/i2.jpg"
            alt="carousel image 1"
          />
        </div>
        <div>
          <Image
            className="object-contain"
            width={1920}
            height={1080}
            loading="lazy"
            src="/i1.jpg"
            alt=" carousel image 2"
          />
        </div>
        <div>
          <Image
            className="object-contain"
            loading="lazy"
            width={1920}
            height={1080}
            src="/i4.jpg"
            alt=" carousel image 3"
          />
        </div>
      </Carousel></div>
    </div>
  );
};

export default Banner;
