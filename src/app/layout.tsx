import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Layout from "~/components/layout/app-layout";
import { Toaster } from "~/components/ui/toaster";
import { ThemeProvider } from "~/components/theme-provider";


export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(0, 0%, 100%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(206.84, 95%, 7.84%)' },
  ]
}

export const metadata: Metadata = {
  title: "Ariful Hoque Al Amin | Portfolio",
  description: "Welcome to My Portfolio",
};

const fontBody = Fira_Code({
  weight: ["400", "600",],
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${fontBody.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            {children}
          </Layout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
