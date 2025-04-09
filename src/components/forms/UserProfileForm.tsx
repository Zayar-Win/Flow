"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "@/lib/types";
import { useForm } from "react-hook-form";
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
import { Loader2 } from "lucide-react";

type Props = {};

const UserProfileForm = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const onSubmit = () => {};
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="self-start cursor-pointer hover:bg-[#2F006B] hover:text-white "
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                <p>Saving</p>
              </>
            ) : (
              "Save User Setting"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserProfileForm;
