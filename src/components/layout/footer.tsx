"use client"

import Link from "next/link";
import dynamic from "next/dynamic"
import { TbBrandDiscord, TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { routes } from "~/lib/routes";

const ThemeToggler = dynamic(() => import("../ui/theme-toggler"), { ssr: false })


const Footer = () => {
  return (
    <footer className="h-footer-height border-t flex items-stretch z-20">
      <div className="flex">
        <span className="text-primary border-r pr-4 items-center pl-4 hidden sm:flex">
          find me in:
        </span>
        <div className="flex items-stretch">
          <Link
            href={routes.linkedIn.title}
            className="text-primary hover:text-foreground px-4 border-r flex items-center justify-center"
            aria-label="LinkedIn"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandLinkedin className="text-2xl" />
          </Link>

          <Link
            href={routes.github.path}
            className="ml-auto text-primary hover:text-foreground px-4 flex items-center justify-center gap-1 border-r"
            aria-label="GitHub"
            title="github"
            target="_blank"
            rel="noreferrer"
          >
            {/* <span>@Ar1f007</span> */}
            <TbBrandGithub className="text-2xl" />
          </Link>

          <Link
            href={routes.github.path}
            className="ml-auto text-primary hover:text-foreground px-4 flex items-center justify-center gap-1 border-r"
            aria-label="Discord"
            title="discord"
            target="_blank"
            rel="noreferrer"
          >
            {/* <span>@Ar1f007</span> */}
            <TbBrandDiscord className="text-2xl" />
          </Link>
        </div>
      </div>


      <ThemeToggler />
    </footer>
  );
};

export default Footer;
