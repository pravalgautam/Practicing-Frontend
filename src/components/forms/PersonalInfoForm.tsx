"use client";
import React from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.number().min(10).max(10),
  gender: z.enum(["Male", "Female"]),
});

type formType = z.infer<typeof formSchema>;

const PersonalInfoForm = () => {
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (value: formType) => {
    console.log(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}></form>
    </Form>
  );
};

export default PersonalInfoForm;
