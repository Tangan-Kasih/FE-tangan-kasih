"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/app/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function DonationForm() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time"
  );
  const [selectedAmount, setSelectedAmount] = useState<number | null>(9999);
  const [customAmount, setCustomAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const presetAmounts = [
    { value: 499, label: "₹ 499" },
    { value: 999, label: "₹ 999" },
    { value: 1299, label: "₹ 1299" },
    { value: 2499, label: "₹ 2499" },
    { value: 7999, label: "₹ 7999" },
    { value: 9999, label: "₹ 9999" },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <div className='w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-xl'>
      <div className='flex mb-6 bg-gray-100 rounded-lg p-1'>
        <button
          onClick={() => setDonationType("one-time")}
          className={cn(
            "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors",
            donationType === "one-time"
              ? "bg-[#004D40] text-white"
              : "hover:bg-gray-200"
          )}
        >
          One time funding
        </button>
        <button
          onClick={() => setDonationType("monthly")}
          className={cn(
            "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors",
            donationType === "monthly"
              ? "bg-[#004D40] text-white"
              : "hover:bg-gray-200"
          )}
        >
          Monthly funding
        </button>
      </div>

      {/* Preset Amounts */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6'>
        {presetAmounts.map((amount) => (
          <button
            key={amount.value}
            onClick={() => handleAmountSelect(amount.value)}
            className={cn(
              "py-2 px-4 rounded-lg text-sm font-medium transition-colors",
              selectedAmount === amount.value
                ? "bg-[#004D40] text-white"
                : "bg-gray-100 hover:bg-gray-200"
            )}
          >
            {amount.label}
          </button>
        ))}
      </div>

      {/* Custom Amount Input */}
      <div className='flex gap-3 mb-6'>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className='w-[100px]'>
            <SelectValue placeholder='Currency' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='USD'>$ USD</SelectItem>
            <SelectItem value='EUR'>€ EUR</SelectItem>
            <SelectItem value='GBP'>£ GBP</SelectItem>
            <SelectItem value='INR'>₹ INR</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type='number'
          placeholder='amount'
          value={customAmount}
          onChange={handleCustomAmountChange}
          className='flex-1'
        />
      </div>

      {/* Donate Button */}
      <Button className='w-full bg-[#F8D419] hover:bg-[#E5C200] text-black font-medium text-lg py-6'>
        Share Some Love !!
      </Button>

      {/* Tip Text */}
      <p className='text-gray-500 text-sm italic mt-4'>
        *Your tip allows us to continue helping more people & communities at a
        reduced fee!
      </p>
    </div>
  );
}
