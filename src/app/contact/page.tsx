"use client";

import ContactForm from "./form"
import { ContactPageSidebar } from "./sidebar"

const ContactPage = () => {

  return (
    <div className="flex flex-col lg:flex-row size-full content-h">
      <ContactPageSidebar />
      <ContactForm />
    </div>
  )
}
export default ContactPage