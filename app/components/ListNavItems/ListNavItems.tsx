import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface listNavItemsProps {
  list: {
    name: string;
    url: string;
  };
}

export default function ListNavItems({ list }: listNavItemsProps) {
  return (
    <div className=' flex items-center'>
      <Link
        href={list.url}
        className={buttonVariants({
          className: "rounded-md px-4 py-2  !no-underline",
          variant: "link",
        })}
      >
        {list.name}
      </Link>
    </div>
  );
}
