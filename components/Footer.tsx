import React from "react";
import Container from "./Container";
import { footerLinks } from "@/lib/data";
import footerLogo from "../public/svg/footer_log.svg";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#001C09] py-[50px] sm:py-[90px]">
      <Container className="flex flex-col gap-[32px]">
        <Image
          src={footerLogo}
          className="object-cover mx-auto"
          alt="financial-image"
        />
        <div className="flex mx-auto flex-wrap justify-center items-center gap-5 sm:gap-[32px]">
          {footerLinks.map(({ name, link }, index) => {
            return (
              <Link href={link} className="text-white" key={index}>
                {name}
              </Link>
            );
          })}
        </div>
        <div className="w-full h-[1px] bg-[#555555]" />
        <div className="flex sm:items-center gap-4 sm:flex-row flex-col sm:justify-between">
          <div className="flex items-center gap-2 flex-col sm:flex-row">
            <Input
              className="border-text_color_01 bg-white focus:bg-white rounded-xl h-[40px] focus:border-green"
              placeholder="John Doe"
            />
            <Button
              asChild
              className="bg-green text-white w-full sm:w-[120px] h-[40px] font-[500] hover:bg-green rounded-[1000px]"
            >
              <Link href="/login">Subscribe</Link>
            </Button>
          </div>
          <p className="text-text_color_01">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
