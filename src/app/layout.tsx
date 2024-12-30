import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Layout from "~/components/layout/app-layout";
import { Toaster } from "~/components/ui/toaster";
import { ThemeProvider } from "~/components/theme-provider";

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
          defaultTheme="dark"
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
