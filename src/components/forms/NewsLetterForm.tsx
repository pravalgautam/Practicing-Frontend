"use client";
import React from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdAlternateEmail } from "react-icons/md";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const formSchema = z.object({
  email: z.string().email().min(1, { message: "email field is required" }),
});

type formType = z.infer<typeof formSchema>;

const NewsLetterForm = () => {
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: formType) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem className="w-fit mx-auto mt-12">
                <FormControl>
                  <div className="flex gap-6 mx-auto items-center">
                    <div className=" flex gap-3 p-2 bg-white rounded-full overflow-hidden items-center border">
                      <div className="size-12 rounded-full bg-card text-white flex items-center justify-center">
                        <MdAlternateEmail size={24} />
                      </div>
                      <Input
                        {...field}
                        className="outline-none border-none text-[#787776] flex-1 text-ellipsis px-4 w-80 focus-visible:ring-transparent "
                        placeholder="Enter Email Address."
                      />
                    </div>
                    <Button
                      className="px-12 h-14 rounded-full bg-yellow-400 font-medium text-lg"
                      type="submit"
                    >
                      Subscribe
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-lg font-medium mx-auto w-fit text-red-600" />
              </FormItem>
            );
          }}
        />
      </form>
    </Form>
  );
};

export default NewsLetterForm;
