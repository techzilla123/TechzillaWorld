import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "../public/images/hero-image.jpg";
import Container from "./Container";

const Hero = () => {
  return (
    <div className="w-full py-[40px] sm:py-[80px]">
      <Container className="w-full grid gap-[40px] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap">
          <h1 className="text-dark_green text-3xl sm:text-[45px] max-w-[500px] font-bold  sm:leading-[54px]">
            Get the money you need to fund all your
            <br />
            <span className="text-warning">financial plans!</span>
          </h1>
          <p className="text-black mt-6 max-w-[500px] text-2xl">
            Make payments, track transactions, and manage your service—all in
            one place.
          </p>
          <div className="flex items-center mt-[40px] gap-2">
            <Button
              asChild
              className="bg-green text-white w-[186px] h-[40px] font-[500] hover:bg-green rounded-[1000px]"
            >
              <Link href="/login">Pay Now</Link>
            </Button>
            <Button
              asChild
              className="bg-white text-black w-[186px] h-[40px]  font-[500] hover:bg-white border border-text_color_01 rounded-[1000px]"
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
        <div className="">
          <div className="max-w-[500px] overflow-hidden rounded-[40px] max-h-[482px]">
            <Image src={HeroImage} className=" object-cover" alt="hero-logo" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
