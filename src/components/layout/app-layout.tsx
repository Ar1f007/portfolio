
import Header from "./header";
import Footer from "~/components/layout/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-svh max-h-svh p-2 lg:p-4 font-serif bg-background max-w-[1920px] mx-auto">
      <div className="h-full flex flex-col border rounded-lg overflow-hidden relative">
        <Header />
        <main className="body-h">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
