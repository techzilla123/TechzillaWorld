"use client";
import React from "react";
import Container from "./Container";
import { zodResolver } from "@hookform/resolvers/zod";
import HeaderText from "./HeaderText";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "fullname must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(2, {
    message: "message must be at least 2 characters.",
  }),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full py-[40px] sm:py-[70px]">
      <Container className="w-full flex flex-col gap-[40px]">
        <HeaderText
          title="Contact Us"
          subTitle="Our friendly team would love to hear from you."
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col max-w-[605px] mx-auto w-full gap-[20px] sm:gap-[30px]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[30px]">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text_color_01">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-text_color_01 focus:bg-white rounded-xl h-[40px] focus:border-green"
                        placeholder="John Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text_color_01">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="border-text_color_01 focus:bg-white rounded-xl h-[40px] focus:border-green"
                        placeholder="johndoe@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text_color_01">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-text_color_01  focus:bg-white rounded-xl  focus:border-green"
                      {...field}
                      rows={10}
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <Button className="bg-green text-white  h-[48px] font-[500] hover:bg-green rounded-[1000px]">
              Send Message
            </Button>
          </form>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
