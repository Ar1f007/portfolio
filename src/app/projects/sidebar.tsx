import { ChevronDown, ChevronRight } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Checkbox } from "~/components/ui/checkbox";
import { ScrollArea } from "~/components/ui/scroll-area";
import { ProjectStack, stackList } from "~/data/stack";
import { cn } from "~/lib/utils";

interface ProjectStackSidebarProps {
  clearStacks: boolean;
  toggleClearStacks: (val: boolean) => void;
  getProjects: (stacks: string[]) => void;
}

export const ProjectStackSidebar: FC<ProjectStackSidebarProps> = ({ clearStacks, toggleClearStacks, getProjects }) => {

  const [selectedStackList, setSelectedStackList] = useState<ProjectStack['title'][]>(['nextjs', 'react']);
  const [showList, setShowList] = useState(true);

  const toggleShowList = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    getProjects(selectedStackList);
  }, [selectedStackList]);

  useEffect(() => {
    if (clearStacks) {
      setSelectedStackList([]);
      toggleClearStacks(false);
    }
  }, [clearStacks]);


  return (
    <aside className="w-full lg:w-[370px] border-r sticky top-0 z-10 shadow-xl lg:shadow-none backdrop-blur-xl">
      <button
        onClick={toggleShowList}
        className="flex items-center w-full hover:text-foreground p-4 border-b h-14"
      >
        {showList ? (
          <ChevronDown className="!size-5" />
        ) : (
          <ChevronRight className="!size-5" />
        )}
        <span className="ml-1">Stacks</span>
      </button>

      <ScrollArea className={cn("md:max-h-none md:sidebar-h",
        {
          "border-b lg:border-none h-[200px] w-full": showList
        }
      )}>
        {showList && (
          <ul className="space-y-2 px-6 mt-4">
            {stackList.map((s, i) => (
              <li key={i} className="flex items-center gap-3 w-full">
                <Checkbox
                  name={s.title}
                  id={s.title}
                  checked={clearStacks ? false : selectedStackList.includes(s.title)}
                  onCheckedChange={(checked: boolean) => {
                    if (checked) {
                      setSelectedStackList((prev) => [...prev, s.title]);
                    } else {
                      const filteredStack = selectedStackList.filter((stack) => stack !== s.title);
                      setSelectedStackList(filteredStack);
                    }
                  }}
                />
                <label className="flex items-center gap-2 text-sm lg:text-lg truncate" htmlFor={s.title}>
                  {s.icon} <span>{s.title}</span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </ScrollArea>
    </aside>
  )
}