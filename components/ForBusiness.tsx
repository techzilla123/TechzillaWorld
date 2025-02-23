import React from "react";
import Container from "./Container";
import businessImage from "../public/images/business.jpg";
import { forBusinessData } from "@/lib/data";
import Image from "next/image";

const ForBusiness = () => {
  return (
    <div className="bg-white w-full py-[40px]">
      <Container className="w-full grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div className="space-y-3">
          <p className="text-warning text-2xl">For Business</p>
          <h1 className="text-dark_green max-w-[500px] text-3xl sm:text-[36px] font-semibold leading-[43px]">
            Manage transactions from your clients
          </h1>
          <div className="w-full overflow-hidden rounded-[40px] max-h-[330px]">
            <Image
              src={businessImage}
              className=" object-cover"
              alt="hero-logo"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {forBusinessData.map(({ description, title, svg }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col py-4 px-6 gap-2 shadow-md rounded-[24px]"
              >
                <Image
                  src={svg}
                  className="object-cover mx-auto"
                  alt="hero-logo"
                />
                <h1 className="text-center font-semibold text-black">
                  {title}
                </h1>
                <p className="text-center text-text_color_01">{description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ForBusiness;
