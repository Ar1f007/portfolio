import Header from "./header";
import Footer from "~/components/layout/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-svh max-h-svh p-2 font-serif max-w-[1920px] mx-auto">
      <div className="size-full flex flex-col border rounded-lg overflow-hidden relative">
        <Header />
        <main className="flex-1 bg-gradient dark:bg-background">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
