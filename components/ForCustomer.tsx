import React from "react";
import Container from "./Container";
import customerImage from "../public/images/customers.jpg";
import Image from "next/image";

const ForCustomer = () => {
  return (
    <div className="w-full bg-white py-[40px] sm:py-[70px]">
      <Container className="w-full grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div className="w-full overflow-hidden rounded-[40px] max-h-[330px]">
          <Image
            src={customerImage}
            className=" object-cover"
            alt="hero-logo"
          />
        </div>

        <div className="space-y-3 my-auto">
          <p className="text-warning text-2xl">For Customers</p>
          <h1 className="text-dark_green max-w-[500px] text-3xl sm:text-[36px] font-semibold leading-[43px]">
            Get the money you need to fund all your
          </h1>
          <p className="text-black leading-[18px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ForCustomer;
