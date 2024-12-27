"use client";

import { cn } from "@/app/lib/utils";
import WidthWrapper from "../WidthWrapper";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import NavItems from "../NavItems/NavItems";
import { Button } from "../ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isRootPath = pathname === "/";
  const isScrolled = scrollPosition > 10;
  return (
    <WidthWrapper
      className={cn(
        "z-50 inset-x-0 h-[80px] transition-all",
        isRootPath ? "sticky top-0" : "sticky top-0 shadow-xl",
        {
          "bg-primary text-white opacity-95": isScrolled,
        }
      )}
    >
      <header className='h-full lg:mx-4'>
        <div className='flex h-full items-center justify-between'>
          <div className='ml-4 lg:ml-0'>
            <Link href={"/"}>
              <BookOpen />
            </Link>
          </div>

          <div className='flex gap-8'>
            <NavItems />
            <Button className='bg-[#F8D419] text-black'>Donate Now</Button>
          </div>
        </div>
      </header>
    </WidthWrapper>
  );
}
