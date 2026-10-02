import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background ambient lighting and dot grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-dot-grid" aria-hidden />
      <div className="ambient-glow-1" aria-hidden />
      <div className="ambient-glow-2" aria-hidden />
      <div className="ambient-glow-3" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}

