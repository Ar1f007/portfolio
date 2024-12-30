"use client"

import { useState } from "react"
import { RenderAboutContent } from "./content"
import Sidebar from "./sidebar"

export interface OpenSections {
  personalInfo: boolean;
  skills: boolean;
  contacts: boolean;
}

export type Sections = "bio" | "education" | "technologies";

const About = () => {

  const [openSections, setOpenSections] = useState<OpenSections>({
    personalInfo: true,
    skills: false,
    contacts: false,
  })

  const [selectedSection, setSelectedSection] = useState<Sections>("bio");

  const toggleSection = (section: keyof OpenSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const toggleSelectedSection = (section: Sections) => {
    setSelectedSection(section);
  }

  return (
    <div className="flex flex-col lg:flex-row content-h">
      <Sidebar
        openSections={openSections}
        toggleSection={toggleSection}
        selectedSection={selectedSection}
        toggleSelectedSection={toggleSelectedSection}
      />
      <RenderAboutContent section={selectedSection} />
    </div>
  )
}
export default About