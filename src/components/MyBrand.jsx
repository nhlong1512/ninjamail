import React from "react";
import Brand1Img from "../assets/images/brand1.png";
import Brand2Img from "../assets/images/brand2.png";
import Brand3Img from "../assets/images/brand3.png";
import Brand4Img from "../assets/images/brand4.png";
import Brand5Img from "../assets/images/brand5.png";

const MyBrand = () => {
  return (
    <div className="lg:mt-[100px]">
      <h3 className="playfairtext text-[26px] leading-[36px] lg:text-[44px] lg:leading-[48px] font-[900] lg:mb-[100px] lg:w-full mx-[10px] mt-0">
        All the best brands <br />
         already use us.
      </h3>
      <div className="flex flex-wrap gap-[42px] lg:gap-[65px] justify-center items-center lg:mb-[120px] mb-[60px]">
        <img src={Brand1Img} alt="brand1" className="h-[22px] lg:h-full" />
        <img src={Brand2Img} alt="brand2" className="h-[33px] lg:h-full" />
        <img src={Brand3Img} alt="brand3" className="h-[33px] lg:h-full" />
        <img src={Brand4Img} alt="brand4" className="h-[18px] lg:h-full" />
        <img src={Brand5Img} alt="brand5" className="h-[18px] lg:h-full" />
      </div>
    </div>
  );
};

export default MyBrand;
