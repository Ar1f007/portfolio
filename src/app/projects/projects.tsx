import { XIcon } from "lucide-react";
import { FC } from "react"
import { Project } from "~/data/projects"
import { ProjectStack } from "~/data/stack";
import { ProjectCard } from "./project-card";

interface ProjectsProps {
  projects: Project[];
  stacks: ProjectStack['title'][];
  handleClearStack: () => void;
}


export const Projects: FC<ProjectsProps> = (props) => {

  const { projects, stacks, handleClearStack } = props;

  return (
    <section className="w-full relative z-10 content-h overflow-y-auto">
      <ul className="flex items-center gap-2 p-4 border-b text-muted min-h-14 lg:max-h-14 flex-wrap sticky top-0 z-20 backdrop-blur-xl">
        {
          stacks.map(s => (
            <li key={s}>
              <span className="text-xs lg:text-lg text-muted">{s};</span>
            </li>
          ))
        }

        {
          stacks.length > 0 && <button
            onClick={handleClearStack}
            className="flex items-center hover:text-foreground"
          >
            <XIcon className="!size-5 text-destructive" />
          </button>
        }
      </ul>


      <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-4 lg:p-8 xl:p-12">
        {
          projects.map((project, idx) => (
            <li key={project.id}>
              <ProjectCard project={project} index={idx} />
            </li>
          ))
        }
      </ul>
    </section>

  )
}