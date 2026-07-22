import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-primary bg-neutral-background text-text-primary selection:bg-brand-primary selection:text-white pb-20">
      <Header />
      <main className="space-y-4">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
      </main>
      <Footer />

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button className="bg-brand-primary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-dark transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
