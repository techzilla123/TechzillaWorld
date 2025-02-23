"use client";
import React from "react";
import Container from "./Container";
import HeaderText from "./HeaderText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqQuestionsData } from "@/lib/data";

const Faq = () => {
  return (
    <div className="w-full py-[40px] bg-[#F5F5F5] sm:py-[70px]">
      <Container className="w-full flex flex-col gap-[40px]">
        <HeaderText
          title="Frequently asked questions"
          subTitle="Everything you need to know about the product and billing."
        />
        <div className="w-full mx-auto max-w-[700px]">
          <Accordion type="single" collapsible className="w-full">
            {faqQuestionsData.map(({ question, answer }, index) => {
              return (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="font-semibold text-black">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text_color_01">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
