import { Link, NavLink } from "react-router-dom";
import { DokanLogo } from "../../assets/svg";

export default function Header() {
  const navLink = ["Services", "Pricing", "How It works"];

  return (
    <div className="flex justify-center px-20 items-center">
      <div className="flex flex-row  items-center h-[96px] sm:w-[calc(100%-180px)] px-4 sm:px-0">
        <div className="flex flex-row gap-2 items-center">
          <DokanLogo className="size-[34px]" />
          <div className="font-syne text-3xl font-semibold leading-42 text-left ">
            Dokan
          </div>
        </div>
        <div className="gap-6 hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          {navLink.map((link) => (
            <a className="cursor-pointer">{link}</a>
          ))}
        </div>
      </div>
      <Link to="/cart" className="flex flex-row gap-2 items-center">
        <DokanLogo className="size-[34px]" />
        <div className="font-syne text-xl font-semibold leading-42 text-left ">
          Visit Cart
        </div>
      </Link>
    </div>
  );
}
