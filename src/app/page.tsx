import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import CodeBlocks from "~/components/ui/code-blocks";
import { routes } from "~/lib/routes";


export default function Home() {
  return (
    <section className="p-4 grid grid-cols-6 relative content-h">

      {/* Placeholder */}
      <div className="hidden lg:block md:col-span-1" />

      {/* Right Col */}
      <div className="col-span-6 md:col-span-6 xl:col-span-5">

        {/* Main */}
        <div className="grid md:grid-cols-9 h-full">

          {/* Left */}
          <div className="md:col-span-4 flex flex-col justify-around md:justify-center">
            <div>
              <h1 className="leading-loose tracking-tight">
                <span className="text-lg block md:text-xl md:mb-2">Hi, I am</span>
                <span className="text-4xl md:text-6xl">Ariful Hoque</span>
              </h1>

              <p className="flex text-[var(--teal-light)] text-lg md:text-2xl -ml-1 mt-2 md:mt-4">
                <ChevronRightIcon className="!size-7" />
                Frontend Developer
              </p>
            </div>
            <h2 className="flex flex-col gap-1 md:mt-12 text-sm md:text-lg">
              <span className="text-gray-500 dark:text-muted">&#47;&#47; find my profile on Github:</span>
              <span className="flex flex-wrap gap-x-1">
                <span className="text-[#4d5bce]">const</span>
                <span className="text-[var(--teal-light)]">GITHUB_LINK</span>
                <span>=</span>

                <span>
                  <span className="text-[#e99287] ">&#10077;</span>
                  <Link
                    href={routes.github.path}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e99287] break-all hover:underline hover:underline-offset-4"
                  >
                    {routes.github.path}
                  </Link>
                  <span className="text-[#e99287] ">&#10078;</span>
                </span>
              </span>
            </h2>

          </div>

          {/* Right */}
          <div className="hidden md:col-span-5 md:flex md:flex-col justify-center gap-4 max-w-[720px] relative">
            <CodeBlocks />
            <div className="green" />
            <div className="blue" />
          </div>
        </div>
      </div>
    </section>
  );
}
