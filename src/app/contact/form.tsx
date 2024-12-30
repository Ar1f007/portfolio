import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { send } from '@emailjs/browser';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "./validation";

import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from "react";
import { useToast } from "~/hooks/use-toast";
import { cn } from "~/lib/utils";
import { Loader2Icon } from "lucide-react";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

const ContactForm = () => {

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })
  const [loading, setLoading] = useState(false);
  const { toast } = useToast()

  async function onSubmit(data: ContactFormValues) {

    setLoading(true);

    const emailData = {
      from_name: data.name,
      message: data.message,
      reply_to: data.email,
      to_name: 'Ariful Hoque Al Amin',
    };

    await new Promise(res => setTimeout(res, 3000))

    send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      emailData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
      .then(
        (result) => {
          if (result.status === 200) {
            toast({
              title: "Thank you!",
              description: "Your message has been sent successfully!",
            })

            form.reset();
          }
        },
        (err) => {
          console.log(err)
          toast({
            variant: "destructive",
            title: "Error!",
            description: "Something went wrong. Please try again later.",
          })
        }
      ).finally(() => {
        setLoading(false);
      });
  }

  const name = form.watch("name");
  const email = form.watch("email");
  const message = form.watch("message");

  const string = `const button = document.querySelector('#sendBtn')
  
  const message = {
    name: "${name}",
    email: "${email}",
    message: "${message}"
  }

  button.addEventListener('click', () => {
    form.send(message);
  })`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 size-full body-h">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-[500px] mx-auto space-y-6 py-4 lg:py-8 px-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted">_name:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-transparent border-[#1A365D] focus-visible:ring-[#2D4A77] focus-visible:ring-1 focus-visible:border-[#2D4A77] text-gray-300"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted">_email:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="bg-transparent border-[#1A365D] focus-visible:ring-[#2D4A77] focus-visible:ring-1 focus-visible:border-[#2D4A77] text-gray-300"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted">_message:</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={6}
                    className="bg-transparent border-[#1A365D] focus-visible:ring-[#2D4A77] focus-visible:ring-1 focus-visible:border-[#2D4A77] text-gray-300 resize-none"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className={cn("submit-btn text-sm lg:text-lg gap-1.5 bg-[#1c2b3a] rounded-md text-foreground px-4 py-2 opacity-80 hover:bg-[#263b50] hover:opacity-100 transition-all", {
              "loading": loading
            })}
            disabled={loading}
          >
            <span className="text">submit-message</span>
            <span className='spinner animate-spin' aria-label='submitting...'>
              <Loader2Icon size={28} />
            </span>
          </button>
        </form>
      </Form>


      <div className="border-l py-4 lg:py-8 px-2 lg:px-8">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">

          <SyntaxHighlighter
            language="javascript"
            style={atelierLakesideDark}
            customStyle={{
              background: "transparent",
              wordWrap: "break-word",
            }}
          >
            {string}
          </SyntaxHighlighter>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div >
  )
}
export default ContactForm