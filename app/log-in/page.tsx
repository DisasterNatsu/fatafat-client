"use client";

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
import Link from "next/link";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be over 6 characters" }),
});

const LogIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold my-5">Welcome back</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-5xl w-full"
        >
          <div className="max-w-sm mx-auto flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="eg. jhon@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Enter your password here"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-2">
              Submit
            </Button>
          </div>
        </form>
      </Form>
      <p className="mt-4">
        Don&apos;t have an account?{" "}
        <Link
          href={"/register"}
          className="font-semibold text-green-700 hover:text-green-500"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
