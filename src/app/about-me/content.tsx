import { FC } from "react"
import { Sections } from "./page"
import { Bio } from "./bio"
import { Education } from "./education"
import { Technologies } from "./technologies"
import { ScrollArea } from "~/components/ui/scroll-area"



export const RenderAboutContent: FC<{ section: Sections }> = ({ section }) => {
  return (
    <ScrollArea className="h-content w-full">
      <article className="p-4 w-full">

        {section == "bio" && <Bio />}
        {section == "education" && <Education />}
        {section == "technologies" && <Technologies />}

      </article>
    </ScrollArea>
  )
}