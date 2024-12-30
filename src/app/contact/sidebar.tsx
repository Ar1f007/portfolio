import { ChevronDown, ChevronRight, ExternalLink, Mail, Phone } from "lucide-react"
import Link from "next/link";
import { useState } from "react"
import { routes } from "~/lib/routes";

interface OpenSections {
  contacts: boolean;
  findMeOn: boolean;
}

export const ContactPageSidebar = () => {
  const [openSections, setOpenSections] = useState<OpenSections>({
    contacts: false,
    findMeOn: false,
  })


  const toggleSection = (section: keyof OpenSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <aside className="w-full lg:w-[370px] border-r sticky top-0 z-10 shadow-lg lg:shadow-none">
      <div className="border-b p-4">
        <button
          onClick={() => toggleSection('contacts')}
          className="flex items-center w-full hover:text-[var(--orange-light)]"
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
              className="flex items-center gap-2 text-primary hover:text-[var(--orange-light)]"
            >
              <Mail size={20} />
              <span className="text-sm">ah.ariful.hoque@gmail.com</span>
            </a>
            <a
              href="tel:+8801633746005"
              className="flex items-center gap-2 text-primary hover:text-[var(--orange-light)]"
            >
              <Phone size={20} />
              <span className="text-sm">+880 1633746005</span>
            </a>
          </div>
        )}
      </div>

      <div className="border-b p-4">
        <button
          onClick={() => toggleSection('findMeOn')}
          className="flex items-center w-full hover:text-[var(--orange-light)]"
        >
          {openSections.findMeOn ? (
            <ChevronDown className="!size-5" />
          ) : (
            <ChevronRight className="!size-5" />
          )}
          <span className="ml-1">find-me-also-on</span>
        </button>
        {openSections.findMeOn && (
          <div className="ml-6 mt-4 lg:mt-2 space-y-2 text-primary">
            <Link
              href={routes.linkedIn.path}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--orange-light)] flex items-center gap-1.5"
            >
              <ExternalLink size={20} />
              <span>LinkedIn</span>
            </Link>

            <Link
              href={routes.discord.path}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--orange-light)] flex items-center gap-1.5"
            >
              <ExternalLink size={20} />
              <span>Discord</span>
            </Link>

            <Link
              href={routes.telegram.path}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--orange-light)] flex items-center gap-1.5"
            >
              <ExternalLink size={20} />
              <span>Telegram</span>
            </Link>

            {/* <Link href={routes.instagram.path} target="_blank" rel="noreferrer" className="hover:text-[var(--orange-light)] flex items-center gap-1.5">
              <ExternalLink size={20} />
              <span>Instagram</span>
            </Link> */}

            <Link
              href={routes.messenger.path}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--orange-light)] flex items-center gap-1.5"
            >
              <ExternalLink size={20} />
              <span>Messenger</span>
            </Link>
          </div>
        )}
      </div>
    </aside>
  )
}