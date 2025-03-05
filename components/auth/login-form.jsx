"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Loader2 } from "lucide-react";
// import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiteLogo } from "@/components/svg";
import { Icon } from "@iconify/react";
import { Checkbox } from "@/components/ui/checkbox";

import { useMediaQuery } from "@/hooks/use-media-query";
import { useRouter } from "next/navigation";
import Image from "next/image";
const LogInForm = () => {
  // const [isPending, startTransition] = React.useTransition();
  const [passwordType, setPasswordType] = React.useState("password");
  const isDesktop2xl = useMediaQuery("(max-width: 1530px)");
  const router = useRouter();
  const togglePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="w-full py-10">
      <Link href="/dashboard" className="inline-block">
        <Image src="/Asset 1RP Logo.png" width="150" height="150" />
      </Link>
      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
        Welcome, Merchant!
      </div>
      <div className="2xl:text-lg text-base text-default-600 2xl:mt-2 leading-6">
        Sign in to have a reliable and fast product delivery
      </div>
      <form onSubmit={formSubmitHandler} className="mt-5 2xl:mt-7">
        <div>
          <Label htmlFor="email" className="mb-2 font-medium text-default-600">
            Email{" "}
          </Label>
          <Input
            // disabled={isPending}
            name="email"
            type="email"
            id="email"
            className={cn("", {
              // "border-destructive": errors.email,
            })}
            size={!isDesktop2xl ? "xl" : "lg"}
          />
        </div>
        {/* {errors.email && (
          <div className=" text-destructive mt-2">{errors.email.message}</div>
        )} */}

        <div className="mt-3.5">
          <Label
            htmlFor="password"
            className="mb-2 font-medium text-default-600"
          >
            Password{" "}
          </Label>
          <div className="relative">
            <Input
              // disabled={isPending}
              name="password"
              type={passwordType}
              id="password"
              className="peer "
              size={!isDesktop2xl ? "xl" : "lg"}
              placeholder=" "
            />

            <div
              className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
              onClick={togglePasswordType}
            >
              {passwordType === "password" ? (
                <Icon
                  icon="heroicons:eye"
                  className="w-5 h-5 text-default-400"
                />
              ) : (
                <Icon
                  icon="heroicons:eye-slash"
                  className="w-5 h-5 text-default-400"
                />
              )}
            </div>
          </div>
        </div>
        {/* {errors.password && (
          <div className=" text-destructive mt-2">
            {errors.password.message}
          </div>
        )} */}

        <div className="mt-5  mb-8 flex flex-wrap gap-2">
          <div className="flex-1 flex  items-center gap-1.5 ">
            <Checkbox
              size="sm"
              className="border-default-300 mt-[1px]"
              id="isRemebered"
            />
            <Label
              htmlFor="isRemebered"
              className="text-sm text-default-600 cursor-pointer whitespace-nowrap"
            >
              Remember me
            </Label>
          </div>
          <Link href="/auth/forgot" className="flex-none text-sm text-primary">
            Forget Password?
          </Link>
        </div>
        <Button
          className="w-full"
          // disabled={isPending}
          size={!isDesktop2xl ? "lg" : "md"}
        >
          {/* {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Loading..." : "Sign In"} */}
          Sign In
        </Button>
      </form>
      <div className="mt-6 xl:mt-8 flex flex-wrap justify-center gap-4"></div>
      <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
        Become a Merchant.{" "}
        <Link href="/auth/register" className="text-primary">
          {" "}
          Sign Up{" "}
        </Link>
      </div>
    </div>
  );
};

export default LogInForm;
