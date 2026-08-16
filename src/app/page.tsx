import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 space-y-4">
        <Hero />
        <About />
        <Resume />
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center text-sm text-[#71717a] mt-12 border-t border-gray-200">
        <p className="mb-4 md:mb-0">© 2024 Alex Chen. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#18181b] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[#18181b] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[#18181b] transition-colors">GitHub</a>
        </div>
      </footer>

      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button className="bg-[#1a56db] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-[#18181b] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </>
  );
}