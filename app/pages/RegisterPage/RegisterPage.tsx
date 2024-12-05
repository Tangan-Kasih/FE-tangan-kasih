"use client";

import { Button, buttonVariants } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import WidthWrapper from "@/app/components/WidthWrapper";
import { cn } from "@/app/lib/utils";
import { RegisterSchema } from "@/app/validations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

type FormValues = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit = (val: FormValues) => {
    console.log(val);
  };

  return (
    <WidthWrapper className='mx-auto flex p-8 lg:h-screen lg:p-0 lg:justify-center'>
      <div className='container relative flex pt-20 flex-col items-center justify-center lg:px0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[360px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <h1 className='text-2xl font-bold'>Register</h1>

            <Link
              href='/Login'
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
            >
              Already have an account? Log in now.
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
          <div className='grid gap-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='fullname' className='mb-2'>
                    Fullname
                  </Label>
                  <Input
                    {...register("fullname")}
                    placeholder='John Doe'
                    className={cn({
                      "focus-within:ring-red-500": errors.fullname,
                    })}
                  />
                  {errors.fullname && (
                    <p className='text-red-500'>{errors.fullname.message}</p>
                  )}
                </div>

                <div className='grid gap-1 py-2'>
                  <Label htmlFor='username' className='mb-2'>
                    Username
                  </Label>
                  <Input
                    {...register("username")}
                    placeholder='john_doe'
                    className={cn({
                      "focus-within:ring-red-500": errors.username,
                    })}
                  />
                  {errors.username && (
                    <p className='text-red-500'>{errors.username.message}</p>
                  )}
                </div>

                <div className='grid gap-1 py-2'>
                  <Label htmlFor='email' className='mb-2'>
                    Email
                  </Label>
                  <Input
                    {...register("email")}
                    placeholder='your@email.com'
                    className={cn({
                      "focus-within:ring-red-500": errors.email,
                    })}
                  />
                  {errors.email && (
                    <p className='text-red-500'>{errors.email.message}</p>
                  )}
                </div>

                <div className='grid gap-1 py-2'>
                  <Label htmlFor='password' className='mb-2'>
                    Password
                  </Label>
                  <Input
                    {...register("password")}
                    placeholder='password'
                    type='password'
                    isPassword
                    className={cn({
                      "focus-within:ring-red-500": errors.password,
                    })}
                  />
                  {errors.password && (
                    <p className='text-red-500'>{errors.password.message}</p>
                  )}
                </div>

                <Button type='submit'>Register</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
}
