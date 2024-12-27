import navItems from "@/app/utils/mock/NavlistItems";
import ListNavItems from "../ListNavItems/ListNavItems";

export default function NavItems() {
  return (
    <nav className=' flex justify-center gap-2 '>
      {navItems.map((item, i) => (
        <ListNavItems list={item} key={i} />
      ))}
    </nav>
  );
}
