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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { STEPS } from "@/lib/enums";
import { z } from "zod";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<STEPS>>;
};

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "fullname must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  option: z.string({
    required_error: "Please select an email to display.",
  }),
  mobile: z.boolean().default(false).optional(),
});

const InitiatePayment = ({ setStep }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setStep(STEPS.StepTwo);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col mx-auto w-full max-w-[410px] gap-6"
      >
        <div className="space-y-3">
          <h1 className="font-bold text-[36px] text-center text-dark_green">
            Initiate new transaction
          </h1>
          <p className="text-text_color_01 text-center">
            No signup/log in require, just verify your email/phone
          </p>
        </div>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-text_color_01">Full Name</FormLabel>
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
        <FormField
          control={form.control}
          name="option"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose Payment</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border  text-text_color_01 focus:bg-white rounded-xl h-[40px] focus:border-green">
                    <SelectValue placeholder="Choose Option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="insurance">Insurance</SelectItem>
                  <SelectItem value="waec/neco">WAEC/NECO</SelectItem>
                  <SelectItem value="nhis">NHIS</SelectItem>
                  <SelectItem value="bedc">BEDC</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
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

export default InitiatePayment;
