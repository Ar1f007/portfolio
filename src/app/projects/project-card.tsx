import { ExternalLink, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react"
import { Project } from "~/data/projects"

interface ProjectProps {
  project: Project;
  index?: number;
}

export const ProjectCard: FC<ProjectProps> = (props) => {

  const { project: { projectTitle, briefDesc, img, previewUrl, stack, detailsUrl, }, index = 0 } = props;

  return (
    <figure className="border rounded-lg animate-fadeIn p-2 md:p-4">
      <h2 className="text-md font-bold text-[var(--blue)] mb-4">
        Project {index + 1} <span className="text-muted font-normal">/ {projectTitle}</span>
      </h2>

      <div className="relative w-full max-w-[37rem] rounded-lg overflow-hidden">
        <div className="h-60 relative overflow-hidden mb-3">
          <Image
            width={300}
            height={200}
            src={img}
            alt={projectTitle}
            className="w-full object-cover aspect-square opacity-60 border-b"
          />
        </div>

        <div className="px-2 md:p-6">
          <p className="text-foreground mb-3 text-sm lg:text-lg leading-relaxed">{briefDesc}</p>

          <ul className="flex gap-2 list-none mb-4 lg:mb-8">
            {stack.map((item, i) => (
              <li key={i} title={item.title}>
                {item.icon}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center gap-2">
            <Link
              href={previewUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-sm lg:text-lg gap-1.5 bg-foreground text-background dark:bg-[#1c2b3a] rounded-md dark:text-foreground px-2 lg:px-4 py-2 opacity-80 dark:hover:bg-[#263b50] hover:opacity-100 transition-all"
            >
              <ExternalLink /> Preview
            </Link>

            {
              !!detailsUrl.length && (
                <Link
                  href={`/projects/${detailsUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-sm lg:text-lg gap-1.5 border border-[#1c2b3a] rounded-md text-foreground px-2 lg:px-4 py-2 opacity-80 dark:hover:bg-[#263b50] hover:opacity-100 transition-all"
                >
                  <Info /> Details
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </figure>
  )
}