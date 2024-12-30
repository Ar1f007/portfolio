import Link from "next/link";
import { TbBrandDiscord, TbBrandGithub, TbBrandLinkedin, TbMoon } from "react-icons/tb";
import { routes } from "~/lib/routes";

const Footer = () => {
  return (
    <footer className="h-footer-height border-t flex items-stretch bg-background z-20">
      <div className="flex">
        <span className="text-muted border-r pr-4 items-center pl-4 hidden sm:flex">
          find me in:
        </span>
        <div className="flex items-stretch">
          <Link
            href={routes.linkedIn.title}
            className="text-muted hover:text-foreground px-4 border-r flex items-center justify-center"
            aria-label="LinkedIn"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandLinkedin className="text-2xl" />
          </Link>

          <Link
            href={routes.github.path}
            className="ml-auto text-muted hover:text-foreground px-4 flex items-center justify-center gap-1 border-r"
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
            className="ml-auto text-muted hover:text-foreground px-4 flex items-center justify-center gap-1 border-r"
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
      <button className="ml-auto px-4 border-l text-muted hover:text-foreground">
        <TbMoon className="text-2xl" />
      </button>
    </footer>
  );
};

export default Footer;
