"use client";
import React from "react";
import Container from "./Container";
import financialImage from "../public/svg/Avatar group.svg";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Financial = () => {
  return (
    <div className="w-full py-[40px] sm:py-[70px]">
      <Container className="bg-[#F5F5F5] max-w-[1040px] py-[40px] flex flex-col gap-[32px] rounded-[24px]">
        <Image
          src={financialImage}
          className="object-cover mx-auto"
          alt="financial-image"
        />
        <div className="space-y-2">
          <h1 className="text-2xl text-center text-dark_green">
            Ready to start exploring financial possibilities?
          </h1>
          <p className="text-black text-center">
            Make payments now or login to your dashboard
          </p>
        </div>
        <div className="flex items-center gap-2 mx-auto">
          <Button
            asChild
            className="bg-green text-white w-[120px] h-[40px] font-[500] hover:bg-green rounded-[1000px]"
          >
            <Link href="/login">Pay Now</Link>
          </Button>
          <Button
            asChild
            className="bg-white text-black w-[120px] h-[40px]  font-[500] hover:bg-white border border-text_color_01 rounded-[1000px]"
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Financial;
