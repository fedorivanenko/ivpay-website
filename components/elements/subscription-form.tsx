'use client'

import * as React from "react";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const subscriptionFormSchema = z.object({
  email: z.string().email().min(2).max(50),
});

export const SubscriptionForm: React.FC = () => {
  const form = useForm<z.infer<typeof subscriptionFormSchema>>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof subscriptionFormSchema>) {
    // Do something with the form values.
    //TODO:Write an API point for subscription form
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative mb-2 flex-1 max-w-80 lg:max-w-none">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase">Subscribe to newsletter</FormLabel>
              <FormMessage />
              <FormControl>
                <Input placeholder="Enter your email" {...field} className="-translate-x-2"/>
              </FormControl>
              <FormDescription className="hidden">
                Enter your email to subscribe
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit" size='sm' className="absolute h-6 right-4 bottom-2">Submit</Button>
      </form>
    </Form>
  );
};
