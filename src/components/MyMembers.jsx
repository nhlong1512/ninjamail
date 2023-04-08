import React from "react";
import MembersCard from "./MembersCard";
import Member1Img from "../assets/images/member1.png";
import Member2Img from "../assets/images/member2.png";
import Member3Img from "../assets/images/member3.png";
import { Carousel } from "antd";

const MyMembers = () => {
  const DetailMembers = [
    {
      name: "Frankie",
      url: `${Member1Img}`,
      desc: "Member since 2016",
    },
    {
      name: "Camile",
      url: `${Member2Img}`,
      desc: "Member since 2012",
    },
    {
      name: "Elayne",
      url: `${Member3Img}`,
      desc: "Member since 2018",
    },
  ];
  return (
    <div className="mt-[50px] lg:mt-[120px]">
      <h3 className="playfairtext text-[28px] leading-[48px] lg:text-[44px] lg:leading-[48px] font-[900] lg:mb-[100px] text-center mx-[10px]">
        All the co-founding members
      </h3>
      <Carousel autoplay autoplaySpeed={2000} className="sm:hidden flex sm:w-0">
        {DetailMembers.map((item) => (
          <MembersCard item={item} />
        ))}
      </Carousel>
      <div className="justify-center items-center sm:gap-[18px] lg:gap-[32px] sm:flex hidden">
        {DetailMembers.map((item) => (
          <MembersCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyMembers;
