"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  mobile: z.boolean().default(false).optional(),
});

const RecentPayments = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
            Recent payments
          </h1>
          <p className="text-text_color_01 text-center">
            Verify your email/phone to retrieve previous transaction
          </p>
        </div>
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
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0  ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm text-text_color_01">
                  Agree to Terms of Service
                </FormLabel>
              </div>
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

export default RecentPayments;
