import React from "react";
import Container from "./Container";
import { TbBrandPepsi } from "react-icons/tb";

const Brands = () => {
  return (
    <div className="w-full bg-dark_green overflow-hidden py-6">
      <Container className="space-y-6">
        <p className="text-[#8FF2AE] text-center">
          Trusted by 40,000+ business and 40 million+ users
        </p>
        <div className="flex animate-marquee items-center  justify-between gap-10">
          <div className="flex items-center gap-2">
            <TbBrandPepsi className="text-white" />
            <p className="text-white text-[18px] text-nowrap">Brand Name</p>
          </div>
          <div className="flex items-center gap-2">
            <TbBrandPepsi className="text-white" />
            <p className="text-white text-[18px] text-nowrap">Brand Name</p>
          </div>
          <div className="flex items-center gap-2">
            <TbBrandPepsi className="text-white" />
            <p className="text-white text-[18px] text-nowrap">Brand Name</p>
          </div>
          <div className="flex items-center gap-2">
            <TbBrandPepsi className="text-white" />
            <p className="text-white text-[18px] text-nowrap">Brand Name</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Brands;
