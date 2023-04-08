import React from "react";
import MailImg from "../assets/images/mail.png";
import NinjaMailImg from "../assets/images/NinjaMail.png";
import NinjaMailLogoImg from "../assets/images/NinjaMailLogo.png";

const MyHeader = () => {
  const itemsNav = ["FEATURES", "PRICING", "SERVICES", "PARTNERS"];
  return (
    <div className="bg-[#fff] flex justify-between py-[28px] lg:px-[100px] px-[12px]">
      <div className="flex justify-center items-center">
        <img src={NinjaMailLogoImg} alt="" className="lg:h-[60px] h-[40px]" />
      </div>
      <div className="flex justify-between items-center">
        {itemsNav.map((item) => (
          <div key={item} className="flex-col mr-[15px] hidden sm:flex justify-center items-center">
            <div className="text-[11px] leading-[13px] p-[6px] font-[800] lg:text-[17px] lg:leading-[20px]">
              {item}
            </div>
            <div className="h-[3px] lg:h-[5px] w-[64px] lg:w-[100px] bg-[#4BA87D]"></div>
          </div>
        ))}
        <button className="px-[12px] lg:px-[20px] py-[6px] lg:py-[10px] bg-[#4BA87D] text-[11px] leading-[13px] lg:text-[17px] lg:leading-[20px] font-[800] border-none text-[#fff] lg:ml-[24px] ml-[18px]">
          SIGN UP FREE
        </button>
      </div>
    </div>
  );
};

export default MyHeader;
