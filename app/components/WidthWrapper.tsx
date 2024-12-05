import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface WidthWrapperType {
  className?: string;
  children: ReactNode;
}

export default function WidthWrapper({
  className,
  children,
}: WidthWrapperType) {
  return (
    <div
      className={
        (cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20"), className)
      }
    >
      {children}
    </div>
  );
}
