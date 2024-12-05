"use client";

import { Button, buttonVariants } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import WidthWrapper from "@/app/components/WidthWrapper";
import { cn } from "@/app/lib/utils";
import { LoginSchema } from "@/app/validations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

type LoginForm = {
  input: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = (val: LoginForm) => {
    console.log(val);
  };
  return (
    <WidthWrapper className='mx-auto flex p-8 lg:h-screen lg:p-0 lg:justify-center'>
      <div className='container relative flex pt-20 flex-col items-center justify-center lg:px0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[360px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <h1 className='text-2xl font-bold'>Login</h1>

            <Link
              href='/Register'
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
            >
              New to the site? Sign up now.
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
          <div className='grid gap-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='input' className='mb-2'>
                    Username or Email
                  </Label>
                  <Input
                    {...register("input")}
                    placeholder='your@email.com'
                    className={cn({
                      "focus-within:ring-red-500": errors.input,
                    })}
                  />
                  {errors.input && (
                    <p className='text-red-500'>{errors.input.message}</p>
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
                <Button type='submit'>Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
}
