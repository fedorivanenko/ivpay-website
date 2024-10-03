'use client'

import * as React from "react";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
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
import { Icon } from "./icon";

const subscriptionFormSchema = z.object({
  email: z.string().email().min(2).max(50),
});

export const SubscriptionForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const form = useForm<z.infer<typeof subscriptionFormSchema>>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof subscriptionFormSchema>) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    
      // Check if the response is OK (status code in the range 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || "Subscription failed!");
        setIsLoading(false);
        return; // Exit early if the response is not OK
      }
    
      // Parse the JSON response body
      const data = await response.json();
    
      // Check for the success property in the response
      if (data.success) {
        form.reset();
        toast.success("You have been subscribed!");
      } else {
        // Handle the case where success is false
        toast.error(data.error || "Subscription failed!");
      }
    
      setIsLoading(false);
    } catch (error) {
      console.error('Subscription error:', error);
      setIsLoading(false);
      toast.error("An error occurred while subscribing.");
    }
    
  };

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
        <Button type="submit" size='sm' className="absolute h-6 right-4 min-w-20 bottom-2">
        {isLoading? <Icon icon="Loader" className="mr-2 h-4 w-4 animate-spin-slow mx-auto" /> : "Subscribe"}
          </Button>
      </form>
    </Form>
  );
};
