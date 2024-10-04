"use client";

import * as React from "react";
import z from "zod";

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
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Container } from "../layouts/container";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { MotionWrapper } from "../motion/motion-wrapper";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";

import { contact } from "../data-providers/company-data-provider";
import { Link } from "../ui/link";
import { Icon } from "../elements/icon";

const contactFormSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
    })
    .min(2)
    .max(50),
  email: z
    .string({
      required_error: "Please enter your email",
    })
    .email()
    .min(2)
    .max(50),
  username: z.string({}).min(2).max(50).optional(),
  topic: z.string({
    required_error: "Please choose a topic",
  }),
  message: z
    .string({
      required_error: "Message is required",
    })
    .max(255),
});

export default function GetInTouchBlock() {
  const [charCount, setCharCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      topic: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    
      // Check if the response is OK (status code in the range 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send your message. Please try again later.");
        setIsLoading(false);
        return; // Exit early if the response is not OK
      }
    
      // Parse the JSON response body
      const data = await response.json();
    
      // Check for the success property in the response
      if (data.success) {
        form.reset();
        toast.success("Success! Your message has been sent to our team.");
      } else {
        // Handle the case where success is false
        toast.error(data.error || "Sending is failed!");
      }
    
      setIsLoading(false);
    } catch (error) {
      console.error('Subscription error:', error);
      setIsLoading(false);
      toast.error("Failed to send your message. Please try again later.");
    }
    
  };

  return (
    <section id="coins-list-block" className="pb-40 pt-10">
      <MotionTriggerWrapper>
        <Container>
          <Heading size="64" as="h1" className="mb-4 lg:text-center">
            Get in Touch
          </Heading>
          <Text className="mb-4 max-w-[30ch] text-sm lg:mx-auto lg:mb-10 lg:max-w-screen-sm lg:text-base">
            Leave your contact and business details. We will contact you as soon
            as possible
          </Text>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <MotionWrapper asDiv className="col-span-2 max-w-screen-md">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <span className="flex w-full flex-col gap-4 lg:flex-row">
                  {/* name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel className="sr-only">
                            Enter your full name
                          </FormLabel>
                          <FormMessage />
                          <FormControl>
                            <Input
                              className="w-full"
                              placeholder="Full name"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                    )}
                  />
                  {/* email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel className="sr-only">
                            Enter your email
                          </FormLabel>
                          <FormMessage />
                          <FormControl>
                            <Input
                              className="w-full"
                              placeholder="Email"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                    )}
                  />
                </span>
                {/* nickname */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="sr-only">
                          enter your nickname or phone number for telegram,
                          whatsapp, viber
                        </FormLabel>
                        <FormMessage />
                        <FormControl>
                          <Input
                            className="w-full"
                            placeholder="Enter your nickname or phone number for Telegram, Whatsapp, Viber"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                  )}
                />
                {/* Topic */}
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Topic</FormLabel>
                        <FormMessage />
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a topic" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={"POS Machine"}>Crypto Payment Terminal</SelectItem>
                            <SelectItem value={"Mobile App"}>Mobile App</SelectItem>
                            <SelectItem value={"E-commerce plugins"}>E-commerce Plugins</SelectItem>
                            <SelectItem value={"Vending machine"}>Vending Machine</SelectItem>
                            <SelectItem value={"API integration"}>API Integration</SelectItem>
                            <SelectItem value={"Listing Request"}>Listing Request</SelectItem>
                            <SelectItem value={"Partnership Request"}>Partnership Request</SelectItem>
                            <SelectItem value={"Other"}>Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                  )}
                />
                {/* Message */}
                <FormField
                  control={form.control}
                  rules={{ maxLength: 255 }}
                  name="message"
                  render={({ field }) => (
                      <FormItem className="relative">
                        <FormLabel className="sr-only">
                          Enter your message
                        </FormLabel>
                        <FormMessage />
                        <FormControl>
                          <Textarea
                            placeholder="Enter your message here"
                            className="aspect-[3] resize-none lg:aspect-[4]"
                            {...field}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              if (inputValue.length <= 255) {
                                field.onChange(inputValue);
                                setCharCount(inputValue.length);
                              }
                            }}
                          />
                        </FormControl>
                        <div
                          aria-hidden
                          className="pointer-events-none absolute bottom-2 right-2 z-20 text-xs text-border"
                        >
                          {charCount}/255
                        </div>
                      </FormItem>
                  )}
                />
                <Button type="submit" className="min-w-36">
                  {isLoading? <Icon icon="Loader" className="mr-2 h-4 w-4 animate-spin-slow mx-auto" /> : "Send Message"}
                </Button>
              </form>
            </Form>
            </MotionWrapper>
            <div className="flex flex-col space-y-2.5 pt-20 lg:py-0">
              <Heading as="h4" size="28">
                Contact Info
              </Heading>
              <Text>{contact.address}</Text>
              <MotionWrapper asDiv>
                <Link
                  className="max-w-min whitespace-nowrap text-accent"
                  url={"mailto:" + contact.email}
                >
                  {contact.email}
                </Link>
              </MotionWrapper>
            </div>
          </div>
        </Container>
      </MotionTriggerWrapper>
    </section>
  );
}
