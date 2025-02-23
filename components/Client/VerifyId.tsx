"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

const VerifyId = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col mx-auto w-full max-w-[410px] gap-6"
      >
        <div className="space-y-3">
          <h1 className="font-bold text-[36px] text-center text-dark_green">
            Verify Your ID
          </h1>
          <p className="text-text_color_01 text-center">
            Input the 4 digit code sent your email/phone
          </p>
        </div>

        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="mx-auto">
              <FormControl>
                <InputOTP maxLength={4} {...field}>
                  <InputOTPGroup className="flex items-center justify-between">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-green text-white  h-[48px] font-[500] hover:bg-green rounded-[1000px]">
          Proceed
        </Button>
      </form>
    </Form>
  );
};

export default VerifyId;
