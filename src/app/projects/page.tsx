"use client"

import { useState } from "react";
import { Project, projectList } from "~/data/projects";
import { Projects } from "./projects";
import { ProjectStack } from "~/data/stack";
import { ProjectStackSidebar } from "./sidebar";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [stacks, setStacks] = useState<ProjectStack['title'][]>([]);
  const [clearStacks, setClearStacks] = useState(false);

  const getProjects = (stack: string[]) => {
    const filteredProjects = projectList.filter((project) =>
      project.stack.find((s) => stack.includes(s.title))
    );

    setProjects(filteredProjects);
    setStacks(stack);
  };

  const handleClearStack = () => {
    setClearStacks(true);
    setStacks([]);
  };


  const toggleClearStack = (val: boolean) => {
    setClearStacks(val)
  }

  return (
    <div className="flex flex-col md:flex-row h-full">
      <ProjectStackSidebar
        getProjects={getProjects}
        clearStacks={clearStacks}
        toggleClearStacks={toggleClearStack}
      />
      <Projects
        projects={projects}
        stacks={stacks}
        handleClearStack={handleClearStack}
      />
    </div>
  )
}
export default ProjectsPage