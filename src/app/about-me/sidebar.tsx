import { ChevronDown, ChevronRight, Mail, Phone } from 'lucide-react'
import { OpenSections, Sections } from './page'
import { FC } from 'react'
import { cn } from '~/lib/utils'

interface AboutStateProps {
  openSections: OpenSections
  selectedSection: Sections

  toggleSection: (val: keyof OpenSections) => void
  toggleSelectedSection: (val: Sections) => void
}

const Sidebar: FC<AboutStateProps> = ({
  openSections,
  selectedSection,
  toggleSection,
  toggleSelectedSection,
}) => {
  return (
    <aside className="lg:w-[370px] border-r">
      <div className="border-b p-4">
        <button
          onClick={() => toggleSection('personalInfo')}
          className="flex items-center w-full hover:text-[#fea55f]"
        >
          {openSections.personalInfo ? (
            <ChevronDown className="!size-5" />
          ) : (
            <ChevronRight className="!size-5" />
          )}
          <span className="ml-1">personal-info</span>
        </button>
        {openSections.personalInfo && (
          <div className="ml-6 mt-4 lg:mt-2 space-y-2">
            <button
              className={cn(
                'block text-primary hover:text-[#fea55f] w-full text-left',
                { 'text-[#fea55f]': selectedSection == 'bio' },
              )}
              onClick={() => toggleSelectedSection('bio')}
            >
              📄 bio
            </button>
            <button
              className={cn(
                'block text-primary hover:text-[#fea55f] w-full text-left',
                { 'text-[#fea55f]': selectedSection == 'education' },
              )}
              onClick={() => toggleSelectedSection('education')}
            >
              🎓 education
            </button>
          </div>
        )}
      </div>

      <div className="border-b p-4">
        <button
          onClick={() => toggleSection('skills')}
          className="flex items-center w-full hover:text-[#fea55f]"
        >
          {openSections.skills ? (
            <ChevronDown className="!size-5" />
          ) : (
            <ChevronRight className="!size-5" />
          )}
          <span className="ml-1">skills</span>
        </button>
        {openSections.skills && (
          <div className="ml-6 mt-4 lg:mt-2 space-y-2">
            <button
              className={cn(
                'block text-primary hover:text-[#fea55f] w-full text-left',
                { 'text-[#fea55f]': selectedSection == 'technologies' },
              )}
              onClick={() => toggleSelectedSection('technologies')}
            >
              💻 technologies
            </button>
          </div>
        )}
      </div>

      <div className="border-b p-4">
        <button
          onClick={() => toggleSection('contacts')}
          className="flex items-center w-full hover:text-[#fea55f]"
        >
          {openSections.contacts ? (
            <ChevronDown className="!size-5" />
          ) : (
            <ChevronRight className="!size-5" />
          )}
          <span className="ml-1">contacts</span>
        </button>
        {openSections.contacts && (
          <div className="ml-6 mt-4 lg:mt-2 space-y-2">
            <a
              href="mailto:ah.ariful.hoque@gmail.com"
              className="flex items-center gap-2 text-primary hover:text-[#fea55f]"
            >
              <Mail size={16} />
              <span className="text-sm">ah.ariful.hoque@gmail.com</span>
            </a>
            <a
              href="tel:+8801633746005"
              className="flex items-center gap-2 text-primary hover:text-[#fea55f]"
            >
              <Phone size={16} />
              <span className="text-sm">+880 1633746005</span>
            </a>
          </div>
        )}
      </div>
    </aside>
  )
}
export default Sidebar
