import React from "react";
import { Carousel } from "antd";

const MembersCard = (props) => {
  return (
    <div className="relative flex justify-center items-center">
      <img src={props.item.url} className="sm:w-[220px] sm:h-[160px] lg:w-[340px] lg:h-[240px]" alt="" />
      <div className="flex-col absolute left-[20%] bottom-[15%] sm:left-[27px] sm:bottom-[20px] text-left">
        <h3 className="text-[22px] leading-[28px] lg:text-[34px] lg:leading-[40px] font-[700] text-white m-0">{props.item.name}</h3>
        <p className="text-[12px] leading-[14px] lg:text-[19px] lg:leading-[22px] font-[500] text-white m-0">
          {props.item.desc}
        </p>
      </div>
    </div>
  );
};

export default MembersCard;
