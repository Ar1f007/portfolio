"use client";

import { useState } from "react";
import { navLinks, routes } from "~/lib/routes";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const linkClasses = "border-l px-8 flex items-center h-full text-lg text-primary hover:text-foreground";
  const mobileLinkClasses = "text-xl flex justify-center text-primary hover:text-foreground";

  const isActive = (path: string) => pathname == path;


  return (
    <>
      <nav className="flex shrink-0 items-stretch justify-between size-full">
        <Link
          href={routes.home.path}
          className="basis-full lg:basis-[309px] flex items-center pl-4"
        >
          ariful hoque
        </Link>

        <ul className="hidden flex-1 lg:flex lg:col-span-5">
          {
            navLinks.map((link, idx, arr) => (
              <li key={idx}>
                <Link
                  href={link.path}
                  className={cn(linkClasses, {
                    "border-r": idx == arr.length - 1,
                    "text-foreground border-b-2 border-b-[#fea55f]": isActive(link.path)
                  })}
                >
                  {link.title}
                </Link>

              </li>
            ))
          }

          <li className="ml-auto border-l">
            <Link href={routes.resume.path} className={linkClasses} target="_blank" rel="noreferrer">
              {routes.resume.title}
            </Link>
          </li>
        </ul>


        <Button
          size="icon"
          variant="link"
          className="h-full w-[60px] lg:hidden mr-2"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <span className="sr-only">
            {!openMenu ? "Open menu" : "Close Menu"}
          </span>

          {
            !openMenu ? <MenuIcon className="!size-7 " /> : <XIcon className="!size-7 " />
          }
        </Button>
      </nav>
      <div
        className={cn(
          "w-full lg:hidden absolute z-50 top-[56px] right-0 size-full max-h-[calc(100svh_-_var(--header-height)_-_var(--footer-height)_-_18px)] opacity-0 bg-background transform translate-x-[50%] transition-all ease duration-300 overflow-hidden",
          {
            "opacity-100 translate-x-0  overflow-y-auto": openMenu
          }
        )}
      >
        <ul className="flex flex-col size-full">
          {
            navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.path}
                  className={cn(mobileLinkClasses, "border-b py-4", {
                    "text-foreground text-[#fea55f]": isActive(link.path)
                  })}
                  onClick={() => setOpenMenu(false)}
                >
                  {link.title}
                </Link>

              </li>
            ))
          }

          <li>
            <Link
              href={routes.resume.path}
              className={cn(mobileLinkClasses, "border-b py-4")}
              onClick={() => setOpenMenu(false)}
              target="_blank"
              rel="noreferrer"
            >
              {routes.resume.title}
            </Link>
          </li>
        </ul>

      </div>
    </>
  )
}
export default Navbar;
